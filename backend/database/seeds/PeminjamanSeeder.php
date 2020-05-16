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
        $tipe = ['f', 'd'];

        foreach (\App\Buku::all() as $key => $value) {
            if(rand(0,1))
            DB::table('peminjamen')->insert([
                'id' => Str::uuid(),
                'tipe' => $tipe[rand(0, 1)],
                'buku_id' => $value->id,
                'pengunjung_id' => \App\User::all()[rand(0, 2)]->id,
                'pinjam' => \Carbon\Carbon::now(),
                'balik' => \Carbon\Carbon::now()->add(7, 'day'),
            ]);
        }
    }
}
