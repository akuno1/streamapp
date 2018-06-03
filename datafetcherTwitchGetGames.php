<?php
    //header('Content-type: application/json');
    $gameList = $_POST['gameList'];
    $gameList = json_decode($gameList);
    
    
    $gameListQuery = array();
    foreach ($gameList as $game) {
        //print_r($game->title . PHP_EOL);
        array_push($gameListQuery, $game->title);
    }

    DEFINE (TWITCH_API_KEY,'asjvg0jf2nh9bzu7884ue18v4z6xex');
        $url = 'https://api.twitch.tv/helix/games?'.'Dota 2';//$query;
        $ch = curl_init();
        $headers=['Client-ID: '.TWITCH_API_KEY, 'Content-type: application/json'];
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $result = curl_exec ($ch);
        curl_close ($ch);
        echo $result;

    $batch_of = 10;
    $batch = array_chunk($gameListQuery, $batch_of);
    foreach($batch as $chunk) {
        foreach ($chunk as $element) {
            //$query = $query ."&name=". $element;
            $query = "name=". $element;
            
            //var_dump($element);
            
        }
        
        
        print_r( PHP_EOL.'>'. $url .'<'. PHP_EOL. PHP_EOL);
    }

    
    
    
?>