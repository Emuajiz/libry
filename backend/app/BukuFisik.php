<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BukuFisik extends Model
{
    //
    public $incrementing = false;

    public function buku()
    {
        return $this->belongsTo('App\Buku', 'id');
    }
}
