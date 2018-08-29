<?php

define('NR', 'NR');

require_once 'vendor/autoload.php';
require_once 'public_html/nr_trait.php';
require_once 'public_html/base.php';
require_once 'public_html/nr.php';

foreach([1,2,3] as $nr) {
	echo call_user_func("A_NR::dummy", $nr);
	echo '<br>';
	echo call_user_func("A_NR::getReturnType", $nr);
	echo '<br>';
	echo call_user_func("A_NR::getReturnDescription", $nr);
	echo '<br>';
}

$loop = React\EventLoop\Factory::create();

$server = new React\Http\Server(function (Psr\Http\Message\ServerRequestInterface $request) {
    return new React\Http\Response(
        200,
        array('Content-Type' => 'text/plain'),
        "Hello World!\n"
    );
});

$socket = new React\Socket\Server('46.252.26.133:7000', $loop);
$server->listen($socket);

$loop->run();