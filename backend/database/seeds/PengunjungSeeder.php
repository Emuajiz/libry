<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class PengunjungSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $id = \App\User::all()->first()->id;
        DB::table('pengunjungs')->insert([
            'id' => $id,
            'nama' => 'thareeq',
            'alamat' => 'rumah',
            'jk' => 1,
            'pp' => 'thareeq.png',
            'hp' => '089622220124',
            'tl' => Date('2000-11-19'),
            'pekerjaan' => 'kuliah',
        ]);
    }
}
