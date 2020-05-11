<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeminjamenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('peminjamen', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('buku_id');
            $table->uuid('pengunjung_id');
            $table->char('tipe', 1);
            $table->date('pinjam');
            $table->date('balik');
            $table->date('tgl_balik')->nullable();
            $table->timestamps();

            $table->primary('id');
            $table->foreign('buku_id')->references('id')->on('bukus');
            $table->foreign('pengunjung_id')->references('id')->on('pengunjungs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('peminjamen');
    }
}
