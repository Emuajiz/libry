<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PenerbitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('penerbits')->insert([
            'id' => Str::uuid(),
            'nama' => 'cetakan',
            'deskripsi' => 'lorem ipsum',
            'link' => 'https://www.wikipedia.org/'
        ]);
    }
}
