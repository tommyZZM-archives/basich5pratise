<?php
/**
 * Created by PhpStorm.
 * User: gdcgdc
 * Date: 14-7-22
 * Time: 下午4:36
 */
header('Content-type:text/xml');

$index=$_GET['index'];
$data=$_GET;

$json=json_encode($data);

$dirname='tmp/';
$filename='create';
$file= $dirname.$filename;

if(!file_exists($file)){
    touch($file);
    chmod($file,0666);
}
file_put_contents($file,$json);

$downloadlink = 'download.php?file=tmp/'.$filename."&amp;".'name='.$index.'.json';

$xml= '<?xml version="1.0" encoding="UTF-8"?>'."\n"
    .'<order>'."\n"
    .'<downloadlink id="download">'."\n"
    .$downloadlink."\n"
    .'</downloadlink>'."\n"
    .'<data id="data">'
    .print_r($data,true)
    .'</data>'."\n"
    .'<json id="json">'
    .$json."\n"
    .'</json>'."\n"
    .'</order>';

//chmod('test.xml',0666);
//file_put_contents('test.xml',$xml);
echo $xml;


/**
<downloadlink id="download">.'.$downloadlink.'</downloadlink>
<data id="data">'.$data.'</data>
<json id="json">'.$json.'</json>
 * **/
?>

