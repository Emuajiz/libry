<?php

namespace App\Http\Resources;

use App\Peminjaman;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

use App\Http\Resources\Review as ReviewResource;

class DetailBuku extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $count = count($this->reviews);
        $ratings = array_reduce($this->reviews()->get('rating')->toArray(), function($carry, $item){
            return $carry + $item['rating'];
        });

        $pinjam = Peminjaman::where('pengunjung_id', Auth::guard('sanctum')->id())
        ->where('buku_id', $this->id)
        ->whereNull('tgl_balik')
        ->get('tipe');

        $status = [];
        foreach ($pinjam as $key => $value) {
            if($value->tipe == 'd')
            {
                $status['digital'] = true;
            }
            if($value->tipe == 'f')
            {
                $status['fisik'] = true;
            }
        }

        if($count)
            $ratings /= $count;
        else
            $ratings = 0;

        return [
            'id' => $this->id,
            'isbn' => $this->isbn,
            'judul' => $this->judul,
            'tahun' => $this->tahun,
            'kategori' => $this->kategori,
            'halaman' => $this->halaman,
            'cover' => $this->cover,
            'sinopsis' => $this->sinopsis,
            'penulis' => $this->penulis->nama,
            'penerbit' => $this->penerbit->nama,
            'buku_lain_penerbit' => url('api/penerbit/buku/' . $this->penerbit->id),
            'rating' => $ratings,
            'ulasan' => [
                'jumlah' => $count,
                'list' => ReviewResource::collection($this->reviews)
                // 'list' => $this->reviews
            ],
            'buku_lain_penulis' => url('api/penulis/buku/' . $this->penulis->id),
            'fav' => $this->when(Auth::guard('sanctum')->user(), function(){
                return count(\App\Wishlist::where('pengunjung_id', Auth::guard('sanctum')->user()->id)
                ->where('buku_id', $this->id)
                ->get());
                // return Auth::guard('sanctum')->user()->id;
            }),
            'fisik' => $this->fisik && true,
            'digital' => $this->digital && true,
            'pinjam' => $this->when($status, $status),
        ];
    }
}
