<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('course_name');
            $table->string('course_image');
            $table->string('short_des');
            $table->string('title');
            $table->text('long_des');
            $table->integer('total_lecture');
            $table->integer('total_students');
            $table->string('skill_all');
            $table->string('video_url');
            $table->string('course_link');
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
