<?php

use Illuminate\Database\Seeder;
use App\Model\Category;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categoryRecords = [
            ['id' => 1, 'category_name' => 'Web App Development', 'category_image' => 'storage/webDev.svg', 'category_des' => 'Everything about web application development', 'status' => 'Active'],

            ['id' => 2, 'category_name' => 'Mobile App Development', 'category_image' => 'storage/appDev.svg', 'category_des' => 'Everything about mobile application development', 'status' => 'Active'],

            ['id' => 3, 'category_name' => 'Desktop App Development', 'category_image' => 'storage/desktopDev.svg', 'category_des' => 'Everything about desktop application development', 'status' => 'Active']
        ];

        Category::insert($categoryRecords);
    }
}
