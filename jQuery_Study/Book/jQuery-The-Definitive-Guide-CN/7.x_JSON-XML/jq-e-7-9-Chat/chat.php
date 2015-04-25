<?php
/**
 * Created by PhpStorm.
 * User: gdcgdc
 * Date: 14-7-29
 * Time: 上午11:53
 */

$data = $_POST;

$name = $data['name'];
$content = $data['content'];

$file = file_get_contents("chatinfo.xml");
//$xml = new SimpleXMLElement($file);

$doc = new DOMDocument('1.0','utf-8');
//$doc->formatOutput = true;
//$doc->preserveWhiteSpace = true;

$doc->load("chatinfo.xml");

$root = $doc->documentElement;

$ch = $root->appendChild($doc->createElement('ch'));
$ch_name = $ch->appendChild($doc->createAttribute('name'));
$ch_time = $ch->appendChild($doc->createAttribute('time'));

$ch->attributes->getNamedItem('name')->nodeValue = $name;
$ch->attributes->getNamedItem('time')->nodeValue = date("Y-m-d H:i:s", time());
$ch->nodeValue = $content;

//$root->appendChild($doc->createTextNode("\n"));//换行

$doc->save('chatinfo.xml');