<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Course;

class HomeController extends Controller
{
    function getHomeCourseData() {
        $result = Course::all();
        return $result;
    }
}
