<?php
    header('Content-type: application/json');

    //$jsonurl = "https://api.steampowered.com/ISteamApps/GetAppList/v2/";
    $jsonurl = "http://api.wipmania.com/json";
    $json = file_get_contents($jsonurl);
    //echo json_encode($json);
    //echo $_GET['jsonCallback'].$json;
    echo $json;
    
?>