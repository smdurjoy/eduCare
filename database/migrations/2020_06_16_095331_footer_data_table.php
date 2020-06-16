<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FooterDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('footer_data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            $table->string('facebook');
            $table->string('youtube');
            $table->string('twitter');
            $table->string('footer_credit');
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
