<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Course;

class HomeController extends Controller
{
    function getHomeCourseData() {
        $result = Course::select('course_name', 'course_image', 'short_des')->get();
        return json_decode(json_encode($result));
    }
}
