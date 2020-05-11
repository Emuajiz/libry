<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $penulis = \App\Penulis::all()->first()->id;
        $penerbit = \App\Penerbit::all()->first()->id;
        DB::table('bukus')->insert([
            'id' => Str::uuid(),
            'isbn' => '123456789',
            'judul' => 'buku',
            'kategori' => 'novel',
            'tahun' => '2020',
            'halaman' => 245,
            'penulis_id' => $penulis,
            'penerbit_id' => $penerbit,
        ]);
    }
}
