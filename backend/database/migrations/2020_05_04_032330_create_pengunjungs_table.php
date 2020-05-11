<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePengunjungsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pengunjungs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nama');
            $table->string('alamat');

            /** 
             * JK
             * 1 lk, 0 pr
             */
            $table->boolean('jk');
            $table->string('pp')->nullable();

            // $table->string('nomor_identitas');
            // $table->string('jenis_identitas');

            $table->string('hp');
            $table->date('tl');
            $table->string('pekerjaan');
            $table->timestamps();

            $table->foreign('id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pengunjungs');
    }
}
