<?php
    header('Content-type: application/json');

    $jsonurl = "https://api.steampowered.com/ISteamApps/GetAppList/v2/";
    $json = file_get_contents($jsonurl);
    
    echo $json;
    
?>