<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Penulis extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama' => $this->nama,
            'foto' => url('foto-penulis/' . $this->foto),
            'buku' => url('api/penulis/buku/' . $this->id),
        ];
    }
}
