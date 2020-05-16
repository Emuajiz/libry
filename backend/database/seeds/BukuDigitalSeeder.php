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
        foreach (\App\Buku::all() as $key => $value) {
            DB::table('buku_digitals')->insert([
                'id' => $value->id,
                'jumlah' => 20,
                'nama_file' => 'buku1.epub',
            ]);
        }
    }
}
