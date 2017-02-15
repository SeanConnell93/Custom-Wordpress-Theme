<?php

//removes extra tags around content
//remove_filter('the_content', 'wpautop');


// add css here

function styles_in_header() {
    
    if (is_404()) {
        wp_enqueue_style( 'custom-error-style', get_template_directory_uri() . '/css/errorstyle.css');   
    } else {
        wp_enqueue_style( 'custom-style', get_template_directory_uri() . '/css/style.css');
    }
    
    wp_enqueue_style('style', get_stylesheet_uri());
    
}

add_action('wp_enqueue_scripts', 'styles_in_header');


// add js here

function js_in_footer() {
    wp_enqueue_script( 'JQuery', get_template_directory_uri() . '/js/jquery-1.12.4.min.js');
    wp_enqueue_script( 'lazyloading', get_template_directory_uri() . '/js/lazyloading.js');
    wp_enqueue_script( 'functions', get_template_directory_uri() . '/js/functions.js');
}

add_action('wp_footer', 'js_in_footer');


//image support

function image_support() {
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'image_support');




// include content for index page
function include_content() {
    $include = get_pages('include=40');
    $content = apply_filters('the_content',$include[0]->post_content);
    $title = apply_filters('the_title',$include[0]->post_title);
    echo '<h1 class="intro-heading">' . $title . '</h1>'; 
    echo '<div class="intro-description">' . $content . '</div>';
}





?>