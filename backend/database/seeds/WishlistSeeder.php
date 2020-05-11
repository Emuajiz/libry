<?php

use Illuminate\Database\Seeder;

class WishlistSeeder extends Seeder
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
        DB::table('wishlists')->insert([
            'buku_id' => $buku,
            'pengunjung_id' => $pengunjung,
        ]);
    }
}
