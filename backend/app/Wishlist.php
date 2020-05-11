<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    //
    public $incrementing = false;

    protected $fillable = ['pengunjung_id', 'buku_id'];

    public function pengunjung()
    {
        return $this->belongsTo('App\Pengunjung');
    }

    public function buku()
    {
        return $this->belongsTo('App\Buku');
    }
}
