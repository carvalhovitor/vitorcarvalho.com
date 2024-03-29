<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('languages', array(
    array(
      'code'    => 'pt',
      'name'    => 'Português',
      'default' => true,
      'locale'  => 'pt',
      'url'     => '/',
    ),
    array(
      'code'    => 'en',
      'name'    => 'English',
      'locale'  => 'en',
      'url'     => '/en',
    ),
  ));

  c::set('panel.stylesheet', 'assets/css/panel.css');
  c::set('krb_html_min', true);
  // c::set('error', '404');
  // c::set('debug', true);