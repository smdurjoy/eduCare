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

    function getLegalEditDetails(Request $request) {
        $id = $request->input('id');
        $result = Information::where('id', $id)->get();
        return $result;
    }

    function editLegal(Request $request) {
        $id = $request->input('id');
        $about = $request->input('about_us');
        $privacy = $request->input('privacy_policy');
        $refund = $request->input('refund_policy');
        $terms = $request->input('terms_and_condition');

        Information::where('id', $id)->update(['about_us' => $about, 'privacy_policy' => $privacy, 'refund_policy' => $refund, 'terms_and_condition' => $terms]);
    }
}
    