<?php
    include 'simple_html_dom.php';
    
    header('Content-type: application/json');

    $pages = $_POST['pages'];
    $tag = $_POST['tag'];
   

    /*
    echo '{"data":[';
    foreach($html->find('span[class=title], div[class=search_released]') as $element) {
       echo '{' . '"text:" "' . $element->plaintext . '"}';
    }
    echo ']}';
    */

    for ($x = 0; $x < 2; $x++) {
        $html = file_get_html('https://store.steampowered.com/search/?sort_by=Released_ASCD');
        foreach($html->find('a.search_result_row') as $article) {
            $item['appid'] = $article->find('img', 0)->src;
            $item['appid'] = substr($item['appid'], 43,-32);
            $item['title'] = $article->find('span.title', 0)->plaintext;
            $item['date'] = $article->find('div.search_released', 0)->plaintext;
            $articles[] = $item;
        }
    }

    //print_r($articles); 
    print_r(json_encode($articles)); 
    //echo $html->find('span[class=title]'); 
    //echo $html;
?>