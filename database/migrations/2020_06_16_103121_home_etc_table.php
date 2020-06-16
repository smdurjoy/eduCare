<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class HomeEtcTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_etcs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('total_teachers');
            $table->integer('total_categories');
            $table->integer('total_topics');
            $table->integer('total_students');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
