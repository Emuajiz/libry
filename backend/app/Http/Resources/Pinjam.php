<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use Carbon\Carbon;

class Pinjam extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'judul' => $this->buku->judul,
            'penulis' => $this->buku->penulis->nama,
            'tipe' => $this->tipe,
            'sisa_hari' => Carbon::now()->diffInDays($this->balik, false),
            'file_location' => $this->when($this->tipe == 'd', url('file-buku/' . $this->buku->digital->nama_file)),
            'cover_location' => url('cover-buku/' . $this->buku->cover)
        ];
    }
}
