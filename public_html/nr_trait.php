<?php

trait ezcReflectionReturnInfo {
    function getReturnType() {
    	return parent::getReturnType() . ' type';
    }

    function getReturnDescription() {
    	return NR . ' description';
    }
}