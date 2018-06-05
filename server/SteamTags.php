<?php
    include 'simple_html_dom.php';

    header('Content-type: application/json');

   
    
    $html = file_get_html('https://store.steampowered.com/tag/browse/#global_492');

   
    foreach($html->find('div.tag_browse_tag') as $article) {
        $item['tag'] = $article->attr['data-tagid'];
        $item['tagName'] = $article->plaintext;
        $articles[] = $item;
    }
    

    print_r(json_encode($articles)); 
?>