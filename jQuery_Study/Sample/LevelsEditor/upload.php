<?php
/**
 * Created by PhpStorm.
 * User: gdcgdc
 * Date: 14-7-24
 * Time: 下午3:32
 */
$dirname='tmp/';
$filename='upload';
$file= $dirname.$filename;

if(!file_exists($file)){
    touch($file);
    chmod($file,0666);
}

//$file_infor = var_export($_FILES,true);
$content = file_get_contents($_FILES['import']['tmp_name']);

file_put_contents($file,$content);

echo($content);
