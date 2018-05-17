<?php
$jsonurl = "https://api.steampowered.com/ISteamApps/GetAppList/v2/";
$json = file_get_contents($jsonurl);
var_dump(json_decode($json));
?>