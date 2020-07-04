<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\Information;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    function index() {
        return view('admin.legal');
    }

    function getLegalData() {
        $result = Information::all();
        return $result;
    }
}
