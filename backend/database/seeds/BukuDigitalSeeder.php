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
            if($value->penulis_id == '1721f63d-7260-48ed-a788-fd53aefe92a1')
            {
                continue;
            }
            else
            {
                if(rand(0,2))
                    DB::table('buku_digitals')->insert([
                        'id' => $value->id,
                        'jumlah' => 20,
                        'nama_file' => 'hp2.epub',
                    ]);
            }
        }

        $idHP = [
            "70b702f1-be9f-4139-b2f0-78d503343f15",
            "9ec6211d-5185-4f90-ba14-5b306565d89a",
            "8a3cf11f-f4e7-4efe-9f01-0a34639fe47d",
            "f5ad629c-05e5-4545-9f54-8c95da811e0f",
            "442a444d-5c4e-4ec2-98a3-c3c2e628a8f0",
            "0c2c6a2c-1ee1-46d5-987a-6f537e1bfc32",
            "1b81d090-d93a-47b3-9052-1137708ae807",
        ];

        for ($i=1; $i <= 7; $i++) { 
            DB::table('buku_digitals')->insert([
                'id' => $idHP[$i-1],
                'jumlah' => 20,
                'nama_file' => 'hp' . $i . '.epub',
            ]);
        }
    }
}
