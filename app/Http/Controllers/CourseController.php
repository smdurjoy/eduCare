<?php

namespace App\Http\Controllers;

use App\Model\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function getCourseData() {
        $data = Course::with('category')->get();
        $data = json_decode(json_encode($data), true);
        return $data;
    }

    function getCourseDetails($courseId) {
        $id = $courseId;
        $result = Course::where('id', $id)->get();
        return $result;
    }
}
