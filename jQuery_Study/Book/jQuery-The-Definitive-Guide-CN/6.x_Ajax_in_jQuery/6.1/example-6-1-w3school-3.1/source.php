<?php
/**
 * Created by PhpStorm.
 * User: gdcgdc
 * Date: 14-7-21
 * Time: 下午12:16
 */

$a = [
    "a",
    "aaa",
    "b",
    "c",
    "d",
    "e",
    "f"
];

$q = $_GET["q"];//通过GET q 赋值到$q

if (strlen($q) > 0){
    $hint = "no suggestion!!";
    for($i=0; $i<count($a); $i++){
        if (strtolower($q) == strtolower(substr($a[$i],0,strlen($q)))){
            if ($hint=="no suggestion!!"){
                $hint=$a[$i];
            }else{
                $hint=$hint." , ".$a[$i];
            }
        }
    }
}

if ($q == ""){
    $response="no suggestion!!";
}else{
    $response=$hint;
}

echo $response;
?>