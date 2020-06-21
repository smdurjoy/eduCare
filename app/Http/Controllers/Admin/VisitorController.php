<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Visitor;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    function visitor() {
        $visitorData = Visitor::all();
        return view('admin.visitor')->with(compact('visitorData'));
    }
}
