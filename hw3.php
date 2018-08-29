<?php

function my_autoload($c){
    require_once($c.'.php');
}
spl_autoload_register('my_autoload', true, true);


$result = '';
for($i = 0; $i < 100; $i++){
  $result .= call_user_func('N10'.'::dummy').' ';
}

echo $result;
