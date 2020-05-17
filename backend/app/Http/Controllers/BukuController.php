<?php

namespace App\Http\Controllers;

use App\Http\Resources\Buku as BukuResource;
use App\Http\Resources\DetailBuku as DetailBukuResource;
use App\Buku;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BukuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return BukuResource::collection(Buku::orderBy('judul', 'ASC')->paginate());
    }
    
    public function terbaru(Request $request)
    {
        return BukuResource::collection(Buku::orderBy('tahun', 'DESC')
        ->orderBy('created_at', 'DESC')
        ->paginate());
    }
    
    public function populer(Request $request)
    {
        return BukuResource::collection(Buku::withCount('reviews')->orderBy('reviews_count', 'DESC')->paginate());
    }

    public function search(Request $request)
    {
        if(isset($request->q))
            return BukuResource::collection(Buku::where('judul', 'like', '%' . $request->q . '%')
            ->orderBy('judul', 'ASC')
            ->paginate());
        else
            return response()->json('Bad Request', 400);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function show(Buku $buku)
    {
        //
        return new DetailBukuResource($buku);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function edit(Buku $buku)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Buku $buku)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Buku  $buku
     * @return \Illuminate\Http\Response
     */
    public function destroy(Buku $buku)
    {
        //
    }
}
