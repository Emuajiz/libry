<?php

namespace App\Http\Controllers;

use App\Pengunjung;
use Illuminate\Http\Request;

class PengunjungController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

        if(isset($request->user()->pengunjung->id))
        {
            return response()->json([
                "message" => "sudah terdaftar",
                "data" => $request->all()
            ], 403);
        }

        $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'jk' => 'required|boolean',
            'hp' => 'required',
            'tl' => 'required|date_format:Y-m-d',
            'pekerjaan' => 'required',
        ]);

        $pengunjung = Pengunjung::create([
            'id' => $request->user()->id,
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'jk' => $request->jk,
            'hp' => $request->hp,
            'tl' => $request->tl,
            'pekerjaan' => $request->pekerjaan,
        ]);

        return response()->json([
            $pengunjung
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pengunjung  $pengunjung
     * @return \Illuminate\Http\Response
     */
    public function show(Pengunjung $pengunjung)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pengunjung  $pengunjung
     * @return \Illuminate\Http\Response
     */
    public function edit(Pengunjung $pengunjung)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pengunjung  $pengunjung
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pengunjung $pengunjung)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pengunjung  $pengunjung
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pengunjung $pengunjung)
    {
        //
    }
}
