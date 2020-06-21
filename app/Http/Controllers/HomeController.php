<?php

namespace App\Http\Controllers;

use App\Model\Category;
use App\Model\FooterData;
use App\Model\HomeEtc;
use App\Visitor;
use Illuminate\Http\Request;
use App\Model\Course;

class HomeController extends Controller
{
    function index() {
        $userIP = $_SERVER['REMOTE_ADDR'];
        date_default_timezone_set("Asia/Dhaka");
        $timeDate = date("Y-m-d h:i:sa");
        Visitor::insert(['ip_address'=> $userIP, 'visit_time' => $timeDate]);
        return view('index');
    }

    function getHomeCourseData() {
        $result = Course::select('course_name', 'course_image', 'short_des')->get();
        return $result;
    }

    function getHomeCategoryData() {
        $result = Category::select('category_name', 'category_image')->get();
        return $result;
    }

    function getFooterData() {
        $result = FooterData::all();
        return $result;
    }

    function getHomeEtcData() {
        $result = HomeEtc::all();
        return $result;
    }
}
