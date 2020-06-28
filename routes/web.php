<?php

use Illuminate\Support\Facades\Route;


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
    Route::post('/deleteCategory', 'CategoryController@deleteCategory');
    Route::post('/categoryDetails', 'CategoryController@categoryDetails');
    Route::post('/editCategory', 'CategoryController@editCategory');
    Route::post('/addCategory', 'CategoryController@addCategory');

//    Admin course routes
    Route::get('/course', 'CourseController@index');
    Route::get('/getCourses', 'CourseController@getCourseData');
    Route::post('/addCourse', 'CourseController@addCourse');
    Route::get('/getCategory', 'CourseController@getCategory');
    Route::get('/editCourse', 'CourseController@editCourse');
});


Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath', '.*');
