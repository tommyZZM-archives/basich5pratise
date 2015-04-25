<?php
/**
 * Created by PhpStorm.
 * User: gdcgdc
 * Date: 14-7-25
 * Time: 上午11:40
 */

if($_GET){
    $data = $_GET['name'];
}else if($_POST){
    $data = $_POST['name'];
}else{
    $data = "";
}



$xml = new DOMDocument('1.0',"utf-8");
//$xml->validateOnParse = true;
$xml->load("xml.xml");

//$test = $xml->getElementById('tommy')->nodeValue;
//echo $test;
/*在 XML 文档中，getElementById这个方法则是使用类型为
id 的任一属性来查找，而不管这个属性的名称是什么。
如果 XML 属性的类型是未知的（比如 XML 解析器忽略了或不能定位文档的 DTD），
该方法总是返回 null。
在客户端 JavaScript 中，这个方法并不经常和 XML 文档一起使用。
实际上，getElementById() 最初被定义为 HTMLDocument 接口的一个成员，
但是在后来的 2 级 DOM 中移入到 Document 接口中。*/

$names = $xml->getElementsByTagName("name");

foreach($names as $name){
    if($name->attributes->getNamedItem('id')->nodeValue == $data){
        echo($name->nodeValue);
    }
}
