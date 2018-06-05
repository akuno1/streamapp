<?php
    $userid = $_POST['userid'];
    

    DEFINE (TWITCH_API_KEY,'asjvg0jf2nh9bzu7884ue18v4z6xex');
    $url = 'https://api.twitch.tv/helix/users?id='. $userid;
    $ch = curl_init();
    $headers=['Client-ID: '.TWITCH_API_KEY, 'Content-type: application/json'];
    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $result = curl_exec ($ch);
    curl_close ($ch);
    echo $result;

    //echo $userid;
?>