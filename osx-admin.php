<?php
/*
Plugin Name: Mac-OS Theme
Plugin URI: http://drewcovi.com
Description: A backend theme meant to unify web & desktop
Author: Drew Covi
Version: 1.3
Author URI: http://drewcovi.com
License: GPL2
*/
define("DC_VERSION","1.0");

function my_wp_admin_css() {
//	wp_enqueue_style('reset',WP_PLUGIN_URL . '/' . plugin_basename(dirname(__FILE__)) . '/styles/reset.css', $deps = array(), $ver = DC_VERSION, $media = 'all' );
	wp_enqueue_style('osx',WP_PLUGIN_URL . '/' . plugin_basename(dirname(__FILE__)) . '/styles/wp-admin.css', $deps = array(), $ver = DC_VERSION, $media = 'all' );
}
function my_wp_admin_js(){
	wp_enqueue_script('custom', WP_PLUGIN_URL . '/' . plugin_basename(dirname(__FILE__)) . '/js/custom.js', array('jquery'));
}

add_action('admin_print_styles','my_wp_admin_css');
add_action('admin_print_scripts','my_wp_admin_js');
?>