<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWishlistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wishlists', function (Blueprint $table) {
            $table->uuid('buku_id');
            $table->uuid('pengunjung_id');
            $table->timestamps();

            $table->primary(['buku_id', 'pengunjung_id']);
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
        Schema::dropIfExists('wishlists');
    }
}
