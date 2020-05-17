<?php

namespace App\Http\Controllers;

use App\Buku;
use App\Wishlist;
use App\Http\Resources\Buku as BukuResource;
use App\Http\Resources\BukuCollection;

use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function index(Request $request)
    {
        return BukuResource::Collection($request->user()->wishlists()->orderBy('created_at', 'ASC')->paginate());
    }

    public function store(Request $request)
    {
        $request->validate([
            'buku' => 'required|uuid',
        ]);

        $wishlist = Wishlist::firstOrCreate([
            'buku_id' => $request->buku,
            'pengunjung_id' => $request->user()->id,
        ]);

        return response()->json($wishlist);
    }
    
    public function destroy(Request $request)
    {
        $request->validate([
            'buku' => 'required|uuid',
        ]);

        $wishlist = Wishlist::where('pengunjung_id', $request->user()->id)
        ->where('buku_id', $request->buku)
        ->delete();
        
        if($wishlist)
        {
            return response()->json([
                "message" => 'wishlist sudah dihapus',
            ]);
        }
        else
        {
            return response()->json([
                "message" => 'wishlist tidak ada',
            ], 404);
        }
    }
}
