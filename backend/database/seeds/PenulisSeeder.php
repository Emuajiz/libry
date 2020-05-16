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
            'id' => 'c537d7e3-6429-47f6-826e-1ee66295f3fe',
            'nama' => 'thareeq',
            'foto' => 'pp1.jpg',
            'deskripsi' => 'lorem ipsum',
            'link' => 'https://www.wikipedia.org/'
        ]);
        DB::table('penulis')->insert([
            'id' => '1721f63d-7260-48ed-a788-fd53aefe92a1',
            'nama' => 'J. K. Rowling',
            'foto' => 'jk-rowling-40998-1-402.jpg',
            'deskripsi' => 'J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007.',
            'link' => 'https://www.jkrowling.com/'
        ]);
    }
}
