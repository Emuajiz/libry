<?php

use Illuminate\Database\Seeder;

class BukuFisikSeeder extends Seeder
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
        DB::table('buku_fisiks')->insert([
            'id' => $buku,
            'jumlah' => 20
        ]);
    }
}
