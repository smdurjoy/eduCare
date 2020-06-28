<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\Category;
use App\Model\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function index() {
        return view('admin.course');
    }

    function getCourseData() {
        $result = Course::orderBy('id', 'desc')->get();
        return $result;
    }

    function getCategory() {
        $data = Category::select('id', 'category_name')->get();
        $data = json_decode(json_encode($data), true);
//        echo "<pre>"; print_r($data); die();
        return $data;
    }

    function addCourse(Request $request) {
        $catId = 1;
        $courseName = $request->input('course_name');
        $courseImage = $request->input('course_image');
        $shortDes = $request->input('short_des');
        $title = $request->input('title');
        $longDes = $request->input('long_des');
        $totalLecture = $request->input('total_lecture');
        $totalStudent = $request->input('total_students');
        $skillAll = $request->input('skill_all');
        $videoUrl = $request->input('video_url');
        $courseLink = $request->input('course_link');

        $result = Course::insert(['category_id' => $catId ,'course_name' => $courseName, 'course_image' => $courseImage, 'short_des' => $shortDes,
            'title' => $title, 'long_des' => $longDes, 'total_lecture' => $totalLecture, 'total_students' => $totalStudent,
            'skill_all' => $skillAll, 'video_url' => $videoUrl, 'course_link' => $courseLink
        ]);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function editCourse() {
        $result = Course::with('category')->get();
        return $result;
    }
}
