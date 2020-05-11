<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewBukusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review_bukus', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->uuid("buku_id");
            $table->uuid("pengunjung_id");
            $table->text("tulisan");
            $table->tinyInteger("rating");
            $table->timestamps();

            $table->foreign('pengunjung_id')->references('id')->on('pengunjungs');
            $table->foreign('buku_id')->references('id')->on('bukus');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review_bukus');
    }
}
