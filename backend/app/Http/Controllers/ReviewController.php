<?php

namespace App\Http\Controllers;

use App\Peminjaman;
use App\ReviewBuku;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ReviewController extends Controller
{
    //
    public function store(Request $request)
    {
        $sudahPinjam = Peminjaman::where('buku_id', $request->buku)
        ->where('pengunjung_id', $request->user()->id)
        ->whereNotNull('tgl_balik')
        ->exists();

        
        if($sudahPinjam)
        {
            $review = ReviewBuku::create([
                'id' => Str::uuid(),
                'pengunjung_id'=> $request->user()->id,
                'tulisan' => $request->tulisan,
                'buku_id'=> $request->buku,
                'rating' => $request->rating,
            ]);

            return response()->json([
                'data' => $review,
                'message' => 'sukses',
            ]);
        }
        return response()->json([
            'message' => 'bukunya harus dibalikin dulu ya',
            Str::uuid()
        ], 403);
    }
}
