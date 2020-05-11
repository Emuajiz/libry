<?php

namespace App\Http\Controllers;

use App\Buku;
use App\Wishlist;

use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            $request->user()->pengunjung->wishlists
        ]);
    }

    public function store(Request $request)
    {
        $wishlist = Wishlist::firstOrCreate([
            'buku_id' => $request->buku,
            'pengunjung_id' => $request->user()->id,
        ]);

        return response()->json([
            $wishlist
        ]);
    }
    
    public function destroy(Buku $buku, Request $request)
    {
        $wishlist = Wishlist::where('pengunjung_id', $request->user()->id)
        ->where('buku_id', $buku->id)
        ->delete();
        
        return response()->json([
            "message" => 'wishlist sudah dihapus'
        ]);
    }
}
