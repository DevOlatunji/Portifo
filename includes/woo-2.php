<?php

if (devolatunji_get_theme_package() !== 'free') {
    // WooCommerce Customizer Controls
    $wp_customize->add_section('woo_settings', [
        'title' => __('Shop Settings', 'devolatunji'),
        'priority' => 40,
    ]);

    // Add more settings/controls...
} else {
    $wp_customize->add_section('woo_upgrade_notice', [
        'title' => __('Unlock Shop Features', 'devolatunji'),
        'priority' => 40,
    ]);
    $wp_customize->add_setting('woo_upgrade_text', []);
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'woo_upgrade_text', [
        'label' => __('Upgrade Required', 'devolatunji'),
        'description' => __('WooCommerce features are only available in the Pro package.', 'devolatunji'),
        'section' => 'woo_upgrade_notice',
        'settings' => [],
        'type' => 'hidden',
    ]));
}
