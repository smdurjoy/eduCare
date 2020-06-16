<?php

use Illuminate\Database\Seeder;
use App\Model\FooterData;

class FooterDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $footerData = [
            ['id' => '1', 'address' => '8353 Sierra Avenue, Frisco, CA 91335', 'phone' => '(907) 350-7400', 'email' => 'support@educare.com', 'facebook' => 'https://facebook.com', 'youtube' => 'https://youtube.com', 'twitter' => 'https://twitter.com', 'footer_credit' => '@smdurjoy']
        ];

        FooterData::insert($footerData);
    }
}
