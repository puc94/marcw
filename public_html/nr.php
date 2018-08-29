<?php

/**
 * A_NR test autoload
 */
class A_NR extends Base
{
	use ezcReflectionReturnInfo;

	static public function dummy() {
		return NR;
	}
}