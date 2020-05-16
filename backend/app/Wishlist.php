<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Relations\Pivot;

class Wishlist extends Model
{
    //
    public $incrementing = false;

    protected $fillable = ['pengunjung_id', 'buku_id'];

    public function pengunjung()
    {
        return $this->belongsTo('App\User');
    }

    public function buku()
    {
        return $this->belongsTo('App\Buku');
    }
}
