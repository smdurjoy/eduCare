<?php

use Illuminate\Database\Seeder;
use App\Model\Course;

class CourseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courseRecords = [
            ['id' => 1, 'category_id' => 1, 'course_name' => 'React', 'course_image' => 'storage/react.svg', 'short_des' => 'Cover all of react', 'title' => 'Full react course', 'long_des' => Str::random(100), 'total_lecture' => 170, 'total_students' => 21, 'skill_all' => Str::random(50), 'video_url' => 'https://smdurjoy.netlify.app', 'course_link' => 'https://smdurjoy.netlify.app'],

            ['id' => 2, 'category_id' => 1, 'course_name' => 'Laravel', 'course_image' => 'storage/laravel.svg', 'short_des' => 'Advance laravel course', 'title' => 'Full laravel course', 'long_des' => Str::random(100), 'total_lecture' => 312, 'total_students' => 32, 'skill_all' => Str::random(50), 'video_url' => 'https://smdurjoy.netlify.app', 'course_link' => 'https://smdurjoy.netlify.app'],

            ['id' => 3, 'category_id' => 1, 'course_name' => 'API', 'course_image' => 'storage/api.svg', 'short_des' => 'Advance API tutorials', 'title' => 'Full api course', 'long_des' => Str::random(100), 'total_lecture' => 121, 'total_students' => 13, 'skill_all' => Str::random(50), 'video_url' => 'https://smdurjoy.netlify.app', 'course_link' => 'https://smdurjoy.netlify.app'],

            ['id' => 4, 'category_id' => 1, 'course_name' => 'JavaScript', 'course_image' => 'storage/javascript.svg', 'short_des' => 'Basic to advanced full course', 'title' => 'Full js course', 'long_des' => Str::random(100), 'total_lecture' => 294, 'total_students' => 55, 'skill_all' => Str::random(50), 'video_url' => 'https://smdurjoy.netlify.app', 'course_link' => 'https://smdurjoy.netlify.app']
        ];

        Course::insert($courseRecords);
    }
}
