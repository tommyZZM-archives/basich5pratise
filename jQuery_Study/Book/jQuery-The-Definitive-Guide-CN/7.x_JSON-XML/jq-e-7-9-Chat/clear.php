<?php
/**
 * Created by PhpStorm.
 * User: gdcgdc
 * Date: 14-7-29
 * Time: 下午4:35
 */

$doc = new DOMDocument('1.0','utf-8');
$doc->formatOutput = false;
$doc->preserveWhiteSpace = false;

$doc->load("chatinfo.xml");

$root = $doc->documentElement;

$chs = $root->getElementsByTagName('ch');

$length = $chs->length;

for ($i = 0;$i<$length;$i++){
    $root->removeChild($chs->item(0));
}

$doc->save('chatinfo.xml');