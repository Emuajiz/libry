<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    //
    public $incrementing = false;

    public function digital()
    {
        return $this->hasOne("App\BukuDigital", "id");
    }

    public function fisik()
    {
        return $this->hasOne("App\BukuFisik", "id");
    }

    public function review()
    {
        return $this->hasMany('App\ReviewBuku');
    }
}
