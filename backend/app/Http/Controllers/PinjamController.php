<?php

namespace App\Http\Controllers;

use App\Buku;
use App\Peminjaman;

use App\Http\Resources\Pinjam as PinjamResource;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;

use App\Http\Resources\Buku as BukuResource;

use Carbon\Carbon;

class PinjamController extends Controller
{
    //
    public function index(Request $request)
    {
        $pinjam1 = Peminjaman::where('pengunjung_id', $request->user()->id)->orderBy('created_at', 'DESC')->get();
        // $pinjam2 = Peminjaman::select(DB::raw('DISTINCT pengunjung_id, buku_id'))->get();
        return PinjamResource::collection($pinjam1);
    }

    public function sedang(Request $request)
    {
        $pinjam1 = Peminjaman::where('pengunjung_id', $request->user()->id)
        ->whereNull('tgl_balik')
        ->orderBy('created_at', 'DESC')
        ->get();
        // $pinjam2 = Peminjaman::select(DB::raw('DISTINCT pengunjung_id, buku_id'))->get();
        return PinjamResource::collection($pinjam1);
    }

    public function sudah(Request $request)
    {
        $pinjam1 = Peminjaman::where('pengunjung_id', $request->user()->id)
        ->whereNotNull('tgl_balik')
        ->orderBy('created_at', 'DESC')
        ->get();
        // $pinjam2 = Peminjaman::select(DB::raw('DISTINCT pengunjung_id, buku_id'))->get();
        return PinjamResource::collection($pinjam1);
    }

    public function pinjam(Request $request)
    {
        $request->validate([
            'pinjam' => 'required|date_format:Y-m-d\TH:i',
            'buku' => 'required|uuid',
            'tipe' => [
                'required',
                Rule::in(['d', 'f'])
            ],
        ]);

        if($buku = Buku::find($request->buku))
        {
            // ambil data buku yang masih dipinjam
            $cek = $request->user()
            ->pengunjung->peminjaman
            ->where('tipe', $request->tipe)
            ->whereNull('tgl_balik');

            // fungsi bawah ini ngecek kalau bukunya ada apa tidak dalam bentuk digital maupun fisik
            if($request->tipe == 'd'){
                $bukuAda = $buku->digital;
                $bentuk = 'digital';
            }
            else {
                $bukuAda = $buku->fisik;          
                $bentuk = 'fisik';
            }
            if($bukuAda == null){
                return response()->json([
                    'message' => 'buku gak tersedia untuk bentuk ' . $bentuk
                ], 404);
            }

            //cek yg lagi dipinjem
            $kepinjem = count(Peminjaman::where('buku_id', $bukuAda->id)
            ->where('tipe', $request->tipe)
            ->whereNull('tgl_balik')
            ->get());
            if($bukuAda->jumlah - $kepinjem == 0){
                return response()->json([
                    'message' => 'bukunya lagi dipinjem semua ya',
                ], 403);
            }

            // cek batas peminjaman kalau lebih udh 3
            if(count($cek) >= 3)
            {
                return response()->json([
                    'message' => 'gak bisa pinjem lebih dari 3 buku diwaktu yang sama',
                ], 403);
            }

            // cek batas kalau dia pinjem buku yang sama diwaktu yang sama
            foreach ($cek as $key => $value) {
                if($request->buku == $value->buku_id)
                    return response()->json([
                        'message' => 'gak bisa pinjem buku yang sama diwaktu yang sama',
                    ], 403);
            }

            // sekarang baru bisa pinjem 1 minggu aja :)
            $balik = Carbon::parse($request->pinjam)->add(7, 'day');

            $pinjam = new Peminjaman();
            $pinjam->id = Str::uuid();
            $pinjam->buku_id = $request->buku;
            $pinjam->pengunjung_id = $request->user()->id;
            $pinjam->pinjam = Carbon::parse($request->pinjam);
            $pinjam->balik = $balik;
            $pinjam->tipe = $request->tipe;
            $pinjam->save();
            
            return response()->json([
                $pinjam,
            ]);
        }
        else
        {
            return response()->json([
                'message' => 'buku gak ada di perpustakaan ini',
            ], 404);
        }

    }

    public function balik(Request $request, Peminjaman $pinjam)
    {
        $request->validate([
            'peminjaman_id' => 'required|uuid',
        ]);

        try
        {
            $pinjam = Peminjaman::where('id', $request->peminjaman_id)
            ->whereNull('tgl_balik')->firstOrFail();
            $pinjam->tgl_balik = Carbon::now();
            $pinjam->save();
    
            return response()->json($pinjam);
        }
        catch(ModelNotFoundException $e)
        {
            return response()->json([
                'message' => 'ga ketemu datanya atau sudah dibalikin',
            ], 404);
        }
    }
}
