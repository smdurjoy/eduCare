<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function index() {
        return view('admin.categories');
    }

    function getCategoryData() {
        $result = Category::all();
        return $result;
    }
}
