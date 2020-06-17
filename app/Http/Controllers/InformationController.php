<?php

namespace App\Http\Controllers;

use App\Model\Information;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    function getPrivacyData() {
        $data = Information::select('privacy_policy')->get();
        return $data;
    }

    function getRefundData() {
        $data = Information::select('refund_policy')->get();
        return $data;
    }

    function getTermsData() {
        $data = Information::select('terms_and_condition')->get();
        return $data;
    }

    function getAboutData() {
        $data = Information::select('about_us')->get();
        return $data;
    }
}
