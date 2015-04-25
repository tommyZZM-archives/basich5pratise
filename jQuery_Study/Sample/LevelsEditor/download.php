<?php
/**
 * Created by PhpStorm.
 * User: gdcgdc
 * Date: 14-7-23
 * Time: 上午10:45
 */
$file = $_GET['file'];
$name = $_GET['name'];

header('Content-Disposition: attachment; filename='.$name);
readfile($file);
//unlink($file);

?>