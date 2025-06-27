<?php

add_action('after_setup_theme', function () {
    $package = get_option('ThemePackage');
    if (!$package) $package = 'free';

    if ($package === 'free') {
        // remove WooCommerce scripts and styles
        remove_action('wp_enqueue_scripts', [WC_Frontend_Scripts::class, 'load_scripts']);
        remove_action('wp_enqueue_scripts', [WC_Frontend_Scripts::class, 'load_styles']);

        // remove WooCommerce support
        remove_theme_support('woocommerce');

        // remove sidebar
        remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar');
    }
});


// Save
update_option('theme_package', base64_encode('pro'));

// Read
$pkg = base64_decode(get_option('theme_package'));


