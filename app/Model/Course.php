<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    function category() {
        return $this->belongsTo('App\Model\Category', 'category_id')->select('id', 'category_name');
    }
}
