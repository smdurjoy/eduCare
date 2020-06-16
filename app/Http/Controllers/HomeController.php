<?php

namespace App\Http\Controllers;

use App\Model\Category;
use Illuminate\Http\Request;
use App\Model\Course;

class HomeController extends Controller
{
    function getHomeCourseData() {
        $result = Course::select('course_name', 'course_image', 'short_des')->get();
        return $result;
    }

    function getHomeCategoryData() {
        $result = Category::select('category_name', 'category_image')->get();
        return $result;
    }
}
