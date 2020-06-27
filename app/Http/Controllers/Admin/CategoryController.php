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
        $result = Category::orderBy('id', 'desc')->get();
        return $result;
    }

    function deleteCategory(Request $request) {
        $id = $request->input('id');
        $result = Category::where('id', '=', $id)->delete();
        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function categoryDetails(Request $request) {
        $id = $request->input('id');
        $result = Category::where('id', '=', $id)->get();
        return $result;
    }

    function editCategory(Request $request) {
        $id = $request->input('id');
        $name = $request->input('name');
        $img = $request->input('image');
        $des = $request->input('description');

        $result = Category::where('id', $id)->update(['category_name' => $name, 'category_image' => $img, 'category_des' => $des]);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function addCategory(Request $request) {
        $name = $request->input('name');
        $img = $request->input('image');
        $des = $request->input('des');

        $result = Category::insert(['category_name' => $name, 'category_image' => $img, 'category_des' => $des, 'status' => 'Active']);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }
}
