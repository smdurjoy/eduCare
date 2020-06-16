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
            $table->integer('category_id');
            $table->string('course_name', 100);
            $table->string('course_image', 200);
            $table->string('short_des', 300);
            $table->string('title', 500);
            $table->text('long_des', 5000);
            $table->integer('total_lecture');
            $table->integer('total_students');
            $table->string('skill_all', 2000);
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
