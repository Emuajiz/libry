<?php

use Illuminate\Database\Seeder;

class BukuDigitalSeeder extends Seeder
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
        DB::table('buku_digitals')->insert([
            'id' => $buku,
            'jumlah' => 20,
            'nama_file' => 'buku',
        ]);
    }
}
