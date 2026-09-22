<?php

function anu_edman_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'anu_edman_setup' );

function anu_edman_scripts() {
	wp_enqueue_style( 'anu-edman-fonts', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500;600;700&display=swap', array(), null );
	wp_enqueue_style( 'anu-edman-style', get_stylesheet_uri(), array(), '1.0.0' );
	wp_enqueue_script( 'anu-edman-script', get_template_directory_uri() . '/assets/js/script.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'anu_edman_scripts' );
