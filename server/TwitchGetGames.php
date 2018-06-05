<?php
    include 'simple_html_dom.php';
    header('Content-type: application/json');
    $gameList = $_POST['gameList'];
    $gameList = json_decode($gameList);
    
    //array of names
    $gameListQuery = array();
    foreach ($gameList as $game) {
        //print_r($game->title . PHP_EOL);
        array_push($gameListQuery, $game->title);
    }

    $total = 0;
    //get all twitch games from the array of names
    $twitchList = array();
    $batch_of = 100;
    $batch = array_chunk($gameListQuery, $batch_of);
    foreach($batch as $chunk) {
        foreach ($chunk as $element) {
            $query = $query ."&name=". $element;
            //var_dump($element);
        }
        
        $query = str_replace(' ','%20', $query);
        
        
        //request data from the games listed by name in $query
        DEFINE (TWITCH_API_KEY,'asjvg0jf2nh9bzu7884ue18v4z6xex');
        $url = 'https://api.twitch.tv/helix/games?'.$query;
        $ch = curl_init();
        $headers=['Client-ID: '.TWITCH_API_KEY, 'Content-type: application/json'];
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $result = curl_exec ($ch);
        curl_close ($ch);
        
        $result = json_decode($result);

        $query = '';

        foreach($result->data as $element) {
            //var_dump($element->name);
            array_push($twitchList, $element);
        }
    }

    /*foreach ($twitchList as $game) {
        DEFINE (TWITCH_API_KEY,'asjvg0jf2nh9bzu7884ue18v4z6xex');
        $url2 = 'https://api.twitch.tv/helix/streams?'. '&first=1'.'&game_id='. $game->id;;
        $ch2 = curl_init();
        $headers2=['Client-ID: '.TWITCH_API_KEY, 'Content-type: application/json'];
        curl_setopt($ch2, CURLOPT_URL,$url2);
        curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch2, CURLOPT_HTTPHEADER, $headers2);
        $result = curl_exec ($ch2);
        curl_close ($ch2);
        
        echo PHP_EOL. $result;

        $result = json_decode($result);

        echo '<>'.$total.'<>'.'('. $game->name .') viewers:'. $result->data[0]->viewer_count . PHP_EOL;
           
        var_dump($result->data);

        
    
    }*/

    //attempt to scrape twitch
    /*$html = file_get_html('https://www.twitch.tv/directory/game/'.'Arena%20of%20Valor');

    foreach($html->find('div') as $div) {
        echo $html;
    }*/

    
    echo json_encode($twitchList);

    
?>