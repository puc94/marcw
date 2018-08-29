<?php

for($i = 0; $i < 100; $i++){
  $class_name = "N$i";
  file_put_contents($class_name.'.php', "<?php
class $class_name {
  static public function dummy(){
    return $i;
  }
}

");
}
