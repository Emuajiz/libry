<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BukuDigital extends Model
{
    //
    public $incrementing = false;

    public function buku()
    {
        return $this->belongsTo('App\Buku', 'id');
    }
}
