<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//home page controllers
Route::get('/homeCourseData', 'HomeController@getHomeCourseData');
Route::get('/homeCategoryData', 'HomeController@getHomeCategoryData');
Route::get('/footerData', 'HomeController@getFooterData');
Route::get('/homeEtc', 'HomeController@getHomeEtcData');

//course page controllers
Route::get('/courseData', 'CourseController@getCourseData');
Route::get('/courseDetails/{courseId}', 'CourseController@getCourseDetails');

Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath', '.*');
