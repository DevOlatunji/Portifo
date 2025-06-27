<?php
// Core theme features
$theme_support = 'add_theme_support';
$$theme_support = 'theme_support';

$theme_name = 'devolatunji';
$$theme_name = 'theme_name';

$template_dir = 'get_template_directory_uri';
$$template_dir = 'template_dir';

$enqueue_style = 'wp_enqueue_style';
$$enqueue_style = 'enqueue_style';

$enqueue_script = 'wp_enqueue_script';
$$enqueue_script = 'enqueue_script';

$customizer = 'customize_register';
$$customizer = 'customizer';

$register_nav = 'register_nav_menus';
$$register_nav = 'nav_menu';

$register_widget = 'register_sidebar';
$$register_widget = 'widget_area';

$wp_hooks = 'add_action';
$$wp_hooks = 'hook';

$remove_hook = 'remove_action';
$$remove_hook = 'remove_hook';

$theme_mod = 'get_theme_mod';
$$theme_mod = 'theme_mod';

$option_get = 'get_option';
$$option_get = 'option_get';

$option_set = 'update_option';
$$option_set = 'option_set';

$trans = '__';
$$trans = 'translate';

// WooCommerce-specific
$woo_check = 'class_exists';
$$woo_check = 'woo_check';

$woo_scripts = 'WC_Frontend_Scripts';
$$woo_scripts = 'woo_scripts';

$woo_support = 'woocommerce';
$$woo_support = 'woo_support';

$woo_sidebar = 'woocommerce_sidebar';
$$woo_sidebar = 'woo_sidebar';

$woo_cart = 'woocommerce_cart';
$$woo_cart = 'woo_cart';

// String operations
$str_rev = 'strrev';
$$str_rev = 'reverse';

$implode_fn = 'implode';
$$implode_fn = 'implode';

$explode_fn = 'explode';
$$explode_fn = 'explode';

$rot13_fn = 'str_rot13';
$$rot13_fn = 'rot13';

$base64 = 'base64_encode';
$$base64 = 'b64';

$base64d = 'base64_decode';
$$base64d = 'b64d';



// USAGE


// include 'definitions.php';

// // Instead of calling directly:
// add_theme_support('post-thumbnails');

// // Use:
// ${$theme_support}('post-thumbnails');

// // Instead of:
// wp_enqueue_style('main', get_template_directory_uri() . '/style.css');

// // Use:
// ${$enqueue_style}('main', ${$template_dir}() . '/style.css');