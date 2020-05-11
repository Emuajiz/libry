<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PenulisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('penulis')->insert([
            'id' => Str::uuid(),
            'nama' => 'thareeq',
            'deskripsi' => 'lorem ipsum',
            'link' => 'https://www.wikipedia.org/'
        ]);
    }
}
