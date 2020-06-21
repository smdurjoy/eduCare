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

// Home page controllers
Route::get('/', 'HomeController@index');
Route::get('/homeCourseData', 'HomeController@getHomeCourseData');
Route::get('/homeCategoryData', 'HomeController@getHomeCategoryData');
Route::get('/footerData', 'HomeController@getFooterData');
Route::get('/homeEtc', 'HomeController@getHomeEtcData');

// Course page controllers
Route::get('/courseData', 'CourseController@getCourseData');
Route::get('/courseDetails/{courseId}', 'CourseController@getCourseDetails');

// Others
Route::get('/privacyData', 'InformationController@getPrivacyData');
Route::get('/refundData', 'InformationController@getRefundData');
Route::get('/termsData', 'InformationController@getTermsData');
Route::get('/aboutData', 'InformationController@getAboutData');


// Admin routes
Route::prefix('/admin')->namespace('Admin')->group(function() {
    Route::get('/', 'HomeController@index');
    Route::get('/visitor', 'VisitorController@visitor');

//    Category routes
    Route::get('/category', 'CategoryController@index');
    Route::get('/getCategoryData', 'CategoryController@getCategoryData');
});


Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath', '.*');
