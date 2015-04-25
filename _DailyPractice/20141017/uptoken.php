<?php
/**
 * Created by PhpStorm.
 * User: tommyZZM
 * Date: 14-9-29
 * Time: 下午10:24
 */

require_once("qiniu/rs.php");

$bucket = 'tommy34012test';
$accessKey = 'h3sJQbfbYSl0P58XpA9B2tnRfZHHVPbWEWc_-y5E';
$secretKey = 'aQV4uaXXojjF_-3asER5IHK9rT-fU7IOAIwXl5Mg';

Qiniu_SetKeys($accessKey, $secretKey);
$putPolicy = new Qiniu_RS_PutPolicy($bucket);
$upToken = $putPolicy->Token(null);

$ruturn = [];
$ruturn['tpost'] = $_POST;
$ruturn['uptoken']=$upToken;

echo json_encode($ruturn);