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
            'id' => '37d004e6-4fbf-436c-b687-95cc84a903e8',
            'nama' => 'cetakan',
            'deskripsi' => 'lorem ipsum',
            'link' => 'https://www.wikipedia.org/'
        ]);
    }
}
