<?php

namespace App\Http\Controllers;

use App\Http\Resources\Buku as BukuResource;
use App\Http\Resources\Penulis as PenulisResource;
use App\Penulis;

use Illuminate\Http\Request;

class PenulisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return Penulis::all();
        return PenulisResource::Collection(Penulis::all());
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
     * @param  \App\Penulis  $penulis
     * @return \Illuminate\Http\Response
     */
    public function show(Penulis $penulis)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Penulis  $penulis
     * @return \Illuminate\Http\Response
     */
    public function edit(Penulis $penulis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Penulis  $penulis
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Penulis $penulis)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Penulis  $penulis
     * @return \Illuminate\Http\Response
     */
    public function destroy(Penulis $penulis)
    {
        //
    }

    public function buku(Penulis $penulis)
    {
        return BukuResource::Collection($penulis->buku);
    }
}
