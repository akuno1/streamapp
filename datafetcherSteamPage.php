<?php
    include 'simple_html_dom.php';

   // header('Content-type: application/json');

    $start_page = $_POST['start_page']; // 1 is the 1st page
    $pages = $_POST['pages'];
    $tag = $_POST['tag'];
    $sortby = $_POST['sortby']; // ASCD or DESC only
   
    
    if ($sortby != 'DESC' || $sortby != 'ASCD' ) { //check for sortby
        $sortby = 'DESC';
    }

    if ($pages == '' || $pages == 0 ) { //undefined page amount
        $pages = 1;
    } else if ($pages > 100) {//upper limit for page amount
        $pages = 100;
    }

    echo " start_page: " . $start_page;
    echo "/ pages:" .$pages;
    echo "/ tag:" .$tag;
    echo "/ sortby:" .$sortby;

    for ($x = 0; $x < $pages; $x++) {
        $html = file_get_html('https://store.steampowered.com/search/?sort_by=Released_'.$sortby.'&page='. ($x + $start_page));
        foreach($html->find('a.search_result_row') as $article) {
            $item['appid'] = $article->find('img', 0)->src;
            $item['appid'] = substr($item['appid'], 43,-32);
            $item['title'] = $article->find('span.title', 0)->plaintext;
            $item['date'] = $article->find('div.search_released', 0)->plaintext;
            $articles[] = $item;
        }
        //echo $x; //simple debugger
    }

    print_r(json_encode($articles)); 
?>