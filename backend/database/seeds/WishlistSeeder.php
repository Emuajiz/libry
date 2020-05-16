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
        
        foreach (\App\Buku::all() as $key => $value) {
            if(rand(0,1))
            DB::table('wishlists')->insert([
                'buku_id' => $value->id,
                'pengunjung_id' => \App\User::all()[rand(0, 2)]->id,
            ]);
        }
    }
}
