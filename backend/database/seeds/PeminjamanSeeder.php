<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PeminjamanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $buku = \App\Buku::all()->first()->id;
        $pengunjung = \App\Pengunjung::all()->first()->id;
        DB::table('peminjamen')->insert([
            'id' => Str::uuid(),
            'tipe' => 'f',
            'buku_id' => $buku,
            'pengunjung_id' => $pengunjung,
            'pinjam' => \Carbon\Carbon::now()->format('Y-m-d'),
            'balik' => \Carbon\Carbon::now()->add(7, 'day')->format('Y-m-d'),
        ]);
    }
}
