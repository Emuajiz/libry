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
        foreach (\App\Buku::all() as $key => $value) {
            DB::table('buku_fisiks')->insert([
                'id' => $value->id,
                'jumlah' => 20
            ]);
        }
    }
}
