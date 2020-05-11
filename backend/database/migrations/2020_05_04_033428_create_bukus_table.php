<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBukusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bukus', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('isbn');
            $table->string('judul');
            $table->year('tahun');
            $table->integer('halaman');
            $table->string('kategori');
            $table->uuid('penulis_id');
            $table->uuid('penerbit_id');
            $table->timestamps();

            $table->foreign('penulis_id')->references('id')->on('penulis');
            $table->foreign('penerbit_id')->references('id')->on('penerbits');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bukus');
    }
}
