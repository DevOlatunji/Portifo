<?php
/*========================================================================================================
THIS SCRIPT MAKES THIS THEME WORK JUST LIKE WORDPRESS ORDINARY ORDAINS IT TO
===========================================================================================================*/
/*
************************************************************************************************************
*/
/*========================================================================================================
THIS SCRIPT MAKES THE MENU WORK - No touch am abeg.
===========================================================================================================*/
require_once get_template_directory() . '/classes/class-walker.php';
/*========================================================================================================
THIS SCRIPT MAKES REQUIRED PLUGINS CALLABLE - mi o fi be gbo oyibo ooooo. Yoruba gan, mo n si manage ni naw
===========================================================================================================*/
include_once(ABSPATH . 'wp-admin/includes/plugin.php');

/*========================================================================================================
THIS SCRIPTS ARE FOR CUSTOMIZER - MA FI OWO KAN OOOOO
===========================================================================================================*/

/*
// Custom logo
*/
add_theme_support('custom-logo', [
    'height'      => 100,
    'width'       => 300,
    'flex-height' => true,
    'flex-width'  => true,
]);

/*
//Custom Colors
*/

function devolatunji_customize_colors($wp_customize) {
    $wp_customize->add_section('theme_colors_section', [
        'title'    => __('Global Theme Colors', 'devolatunji'),
        'priority' => 31,
    ]);

    $colors = [
        'primary'       => ['#222222', 'Primary Color'],
        'dark_black'    => ['#000000', 'Dark Black'],
        'accent'        => ['#faff00', 'Accent Color'],
        'accent_dark'   => ['#c7cc00', 'Accent Dark'],
        'accent_light'  => ['#ffff88', 'Accent Light'],
        'white'         => ['#ffffff', 'White'],
        'light_bg'      => ['#f5f5f5', 'Light Background'],
        'border_color'  => ['#e0e0e0', 'Border Color'],
        'text_dark'     => ['#1d1d1d', 'Text Dark'],
        'text_light'    => ['#999999', 'Text Light'],
    ];

    foreach ($colors as $slug => [$default, $label]) {
        $wp_customize->add_setting("{$slug}_color", [
            'default'   => $default,
            'transport' => 'refresh',
        ]);

        $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, "{$slug}_color", [
            'label'    => __($label, 'devolatunji'),
            'section'  => 'theme_colors_section',
            'settings' => "{$slug}_color",
        ]));
    }
}
add_action('customize_register', 'devolatunji_customize_colors');


/*
//Enque the stylings 
*/
function devolatunji_add_custom_colors_css() {
    ?>
    <style type="text/css">
        :root {
            --primary: <?php echo esc_html(get_theme_mod('primary_color', '#222222')); ?>;
            --dark-black: <?php echo esc_html(get_theme_mod('dark_black_color', '#000000')); ?>;
            --accent: <?php echo esc_html(get_theme_mod('accent_color', '#faff00')); ?>;
            --accent-dark: <?php echo esc_html(get_theme_mod('accent_dark_color', '#c7cc00')); ?>;
            --accent-light: <?php echo esc_html(get_theme_mod('accent_light_color', '#ffff88')); ?>;
            --white: <?php echo esc_html(get_theme_mod('white_color', '#ffffff')); ?>;
            --light-bg: <?php echo esc_html(get_theme_mod('light_bg_color', '#f5f5f5')); ?>;
            --border-color: <?php echo esc_html(get_theme_mod('border_color_color', '#e0e0e0')); ?>;
            --text-dark: <?php echo esc_html(get_theme_mod('text_dark_color', '#1d1d1d')); ?>;
            --text-light: <?php echo esc_html(get_theme_mod('text_light_color', '#999999')); ?>;
        }
    </style>
    <?php
}
add_action('wp_head', 'devolatunji_add_custom_colors_css');


/*
//Nav Menu Action Button
*/
function nav_call_to_action_customize_register($wp_customize){
    // CTA Section
    $wp_customize->add_section('menu_call_to_action_section', [
        'title'    => __('Menu CTA Section', 'devolatunji'),
        'priority' => 30,
    ]);

    // CTA Button Text
    $wp_customize->add_setting('cta1_button_text', [
        'default'   => 'Get Started',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('cta1_button_text', [
        'label'   => __('CTA Button Text', 'devolatunji'),
        'section' => 'menu_call_to_action_section',
        'type'    => 'text',
    ]);

    // CTA Button Link
    $wp_customize->add_setting('cta1_button_link', [
        'default'   => '#',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('cta1_button_link', [
        'label'   => __('CTA Button Link', 'devolatunji'),
        'section' => 'menu_call_to_action_section',
        'type'    => 'url',
    ]);
}
add_action('customize_register', 'nav_call_to_action_customize_register');


function devolatunji_customize_register($wp_customize) {

    // Hero Section
    $wp_customize->add_section('hero_section', [
        'title'    => __('Hero Section', 'devolatunji'),
        'priority' => 30,
    ]);

    // Hero Heading
    $wp_customize->add_setting('hero_heading', [
        'default'   => 'Hi There,',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('hero_heading', [
        'label'   => __('Hero Heading', 'devolatunji'),
        'section' => 'hero_section',
        'type'    => 'text',
    ]);

    // Hero Subtext
    $wp_customize->add_setting('hero_subtext', [
        'default'   => 'I am Dev Olatunji.',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('hero_subtext', [
        'label'   => __('Hero Subtext', 'devolatunji'),
        'section' => 'hero_section',
        'type'    => 'textarea',
    ]);

    // Hero Description
    $wp_customize->add_setting('hero_description', [
        'default'   => 'Smart businesses hire me to create systems that spread their messages and attract the right audience from all around the globe. You are smart.',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('hero_description', [
        'label'   => __('Hero Description', 'devolatunji'),
        'section' => 'hero_section',
        'type'    => 'textarea',
    ]);

    // Hero Button Text
    $wp_customize->add_setting('hero_button_text', [
        'default'   => 'Get Started',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('hero_button_text', [
        'label'   => __('Hero Button Text', 'devolatunji'),
        'section' => 'hero_section',
        'type'    => 'text',
    ]);

    // Hero Button Link
    $wp_customize->add_setting('hero_button_link', [
        'default'   => '#services',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('hero_button_link', [
        'label'   => __('Hero Button Link', 'devolatunji'),
        'section' => 'hero_section',
        'type'    => 'url',
    ]);

    // Hero Image
    $wp_customize->add_setting('hero_image', [
        'default'   => '',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_image', [
        'label'   => __('Hero Image', 'devolatunji'),
        'section' => 'hero_section',
        'settings' => 'hero_image',
    ]));

    // Stats - Years
    $wp_customize->add_setting('hero_years', ['default' => '5+', 'transport' => 'refresh']);
    $wp_customize->add_control('hero_years', [
        'label' => __('Years of Experience', 'devolatunji'),
        'section' => 'hero_section',
        'type' => 'text',
    ]);

    // Stats - Jobs
    $wp_customize->add_setting('hero_jobs', ['default' => '200+', 'transport' => 'refresh']);
    $wp_customize->add_control('hero_jobs', [
        'label' => __('Jobs Delivered', 'devolatunji'),
        'section' => 'hero_section',
        'type' => 'text',
    ]);

    // Stats - Satisfaction
    $wp_customize->add_setting('hero_clients', ['default' => '99%', 'transport' => 'refresh']);
    $wp_customize->add_control('hero_clients', [
        'label' => __('Client Satisfaction', 'devolatunji'),
        'section' => 'hero_section',
        'type' => 'text',
    ]);
}
add_action('customize_register', 'devolatunji_customize_register');

/*
*/
function devolatunji_customize_header_elements($wp_customize) {

    $wp_customize->add_section('header_extras', [
        'title'    => __('Header Extras', 'devolatunji'),
        'priority' => 35,
    ]);

    // Header Button Text
    $wp_customize->add_setting('header_button_text', [
        'default'   => 'Hire Me',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('header_button_text', [
        'label'   => __('Header Button Text', 'devolatunji'),
        'section' => 'header_extras',
        'type'    => 'text',
    ]);

    // Header Button Link
    $wp_customize->add_setting('header_button_link', [
        'default'   => 'https://wa.me/2348135293667?text=Hi%20Dev%20Olatunji',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('header_button_link', [
        'label'   => __('Header Button Link', 'devolatunji'),
        'section' => 'header_extras',
        'type'    => 'url',
    ]);

    // Phone Number
    $wp_customize->add_setting('header_phone', [
        'default'   => '+234 813 529 3667',
        'transport' => 'refresh',
    ]);
    $wp_customize->add_control('header_phone', [
        'label'   => __('Phone Number', 'devolatunji'),
        'section' => 'header_extras',
        'type'    => 'text',
    ]);
}
add_action('customize_register', 'devolatunji_customize_header_elements');

/*
//About Me Customization
*/
function devolatunji_about_me_section_customize_register($wp_customize) {
    $wp_customize->add_section('about_me_section', [
        'title' => __('About Me Section', 'devolatunji'),
        'priority' => 35,
    ]);

    $wp_customize->add_setting('about_me_title', [
        'default' => 'About Me Section',
        'transport' => 'refresh',
    ]);

    $wp_customize->add_control('about_me_title', [
        'label' => __('Section Title', 'devolatunji'),
        'section' => 'about_me_section',
        'type' => 'text',
    ]);
}
add_action('customize_register', 'devolatunji_about_me_section_customize_register');


/*
//Contact Form Customization
*/
function devolatunji_contact_form_customize_register($wp_customize) {
    $wp_customize->add_section('contact_section', [
        'title' => __('Contact Section', 'devolatunji'),
        'priority' => 35,
    ]);

    $wp_customize->add_setting('contact_form_shortcode', [
        'default' => '[contact-form-7 id="123" title="Contact form"]',
        'transport' => 'refresh',
    ]);

    $wp_customize->add_control('contact_form_shortcode', [
        'label' => __('Contact Form Shortcode', 'devolatunji'),
        'section' => 'contact_section',
        'type' => 'text',
    ]);
}
add_action('customize_register', 'devolatunji_contact_form_customize_register');


/*
//Footer Section Customization
*/
function devolatunji_footer_customize_register($wp_customize) {
    $wp_customize->add_section('theme_footer_section', [
        'title' => __('Theme Footer Section', 'devolatunji'),
        'priority' => 36,
    ]);

    // footer title
    $wp_customize->add_setting('footer_title', [
        'default' => 'Portifo',
        'transport' => 'refresh',
    ]);

    $wp_customize->add_control('footer_title', [
        'label' => __('Footer Title', 'devolatunji'),
        'section' => 'theme_footer_section',
        'type' => 'text',
    ]);

    // footer description
    $wp_customize->add_setting('footer_description', [
        'default' => 'This is the default description of this theme',
        'transport' => 'refresh',
    ]);

    $wp_customize->add_control('footer_description', [
        'label' => __('Footer Description', 'devolatunji'),
        'section' => 'theme_footer_section',
        'type' => 'text',
    ]);

    /*
    // Footer Social Media Menu customization
    */
    $wp_customize->add_setting('facebook_url', ['default' => '', 'transport' => 'refresh']);
    $wp_customize->add_control('facebook_url', [
        'label'   => __('Facebook URL', 'devolatunji'),
        'section' => 'theme_footer_section',
        'type'    => 'url',
    ]);

    $wp_customize->add_setting('x_url', ['default' => '', 'transport' => 'refresh']);
    $wp_customize->add_control('x_url', [
        'label'   => __('X URL', 'devolatunji'),
        'section' => 'theme_footer_section',
        'type'    => 'url',
    ]);

    $wp_customize->add_setting('instagram_url', ['default' => '', 'transport' => 'refresh']);
    $wp_customize->add_control('instagram_url', [
        'label'   => __('Instagram URL', 'devolatunji'),
        'section' => 'theme_footer_section',
        'type'    => 'url',
    ]);

    $wp_customize->add_setting('linkedin_url', ['default' => '', 'transport' => 'refresh']);
    $wp_customize->add_control('linkedin_url', [
        'label'   => __('LinkedIn URL', 'devolatunji'),
        'section' => 'theme_footer_section',
        'type'    => 'url',
    ]);
}
add_action('customize_register', 'devolatunji_footer_customize_register');

// usage 
/*
// <a href="<?php echo esc_url(get_theme_mod('facebook_url')); ?>" target="_blank">
//   <i class="fab fa-facebook-f"></i>
// </a>
*/


/*========================================================================================================
THIS SCRIPT ENQUES THE STYLES USED IN THIS THEME
===========================================================================================================*/
function devolatunji_scripts() {
  // Base asset URL
  $asset_path = get_template_directory_uri() . '/assets';
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap', [], null);
  wp_enqueue_style('bootstrap', "$asset_path/css/bootstrap-5.0.2-dist/css/bootstrap.css");
  wp_enqueue_style('fontawesome',"$asset_path/css/fontawesome/css/all.min.css");
  wp_enqueue_style('aos', "$asset_path/css/aos/dist/aos.css");
  wp_enqueue_style('main-style', get_template_directory_uri()."/style.css");
  wp_enqueue_style('theme-style', "$asset_path/css/style.css");

  // JS   
  wp_enqueue_script('jquery');
  wp_enqueue_script('jquery-slimscroll', "$asset_path/js/jquery-slimscroll.min.js", ['jquery'], null, true);
  wp_enqueue_script('jquery-ui', "$asset_path/js/jquery-ui.min.js", ['jquery'], null, true);
  wp_enqueue_script('bootstrap-bundle', "$asset_path/js/bootstrap.bundle.min.js", ['jquery'], null, true);
  wp_enqueue_script('fontawesome-all', "$asset_path/css/fontawesome/js/all.min.js", [], null, true);
  wp_enqueue_script('aos', "$asset_path/js/aos/dist/aos.js", [], null, true);
  wp_enqueue_script('devolatunji-script', "$asset_path/js/script.js", ['jquery'], null, true);
  wp_enqueue_script('whatsapp', "$asset_path/plugins/whatsapp/whatsapp.js", [], null, true);
  wp_enqueue_script('sweetalert2', "$asset_path/plugins/sweetalert/sweetalert2.all.min.js", [], null, true);
  wp_enqueue_script('isotope', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'devolatunji_scripts');

/*
//Theme supports
*/
add_theme_support('title-tag');add_theme_support('post-thumbnails');add_theme_support('custom-logo');
add_theme_support('woocommerce');add_theme_support('editor-styles');add_theme_support('wp-block-styles');
add_theme_support('responsive-embeds');

/*========================================================================================================
THIS SCRIPT MAKES THIS THEME COMPATIBLE WITH ELEMENTOR
===========================================================================================================*/
add_action('after_setup_theme', function () {
  add_theme_support('elementor');
});

/*========================================================================================================
THIS SCRIPT MAKES THIS THEME COMPATIBLE WITH WOOCOMMERCE
===========================================================================================================*/
function devolatunji_add_woocommerce_support() {
  add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'devolatunji_add_woocommerce_support');

/*========================================================================================================
THIS SCRIPT DECLARES REQUIRED PLUGINS AND/OR TOOLS NECESSARY FOR THIS THEME TO FUNCTION PROPERLY
===========================================================================================================*/
require_once get_template_directory() . '/includes/class-tgm-plugin-activation.php';

add_action('tgmpa_register', 'devolatunji_register_required_plugins');

function devolatunji_register_required_plugins() {
    $plugins = [
        [
            'name'     => 'Advanced Custom Fields',
            'slug'     => 'advanced-custom-fields',
            'required' => true,
        ],
    ];

    $config = [
        'id'           => 'devolatunji-theme',
        'menu'         => 'tgmpa-install-plugins',
        'has_notices'  => true,
        'dismissable'  => false,
        'is_automatic' => true,
    ];

    tgmpa($plugins, $config);
}

/*
//Check if contact form 7 is installed. Else, inform admin that this theme requires it
*/
function check_contact_form_7_installed() {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');

    if (!is_plugin_active('contact-form-7/wp-contact-form-7.php')) {
        add_action('admin_notices', function () {
            $install_url = wp_nonce_url(
                self_admin_url('update.php?action=install-plugin&plugin=contact-form-7'),
                'install-plugin_contact-form-7'
            );

            echo '<div class="notice notice-warning is-dismissible"><p>';
            echo 'The <strong>Portifo Theme</strong> by Dev Olatunji requires the <strong>Contact Form 7</strong> plugin. ';
            echo '<a href="' . esc_url($install_url) . '" class="button-primary">Install Contact Form 7</a>';
            echo '</p></div>';
        });
    }
}
add_action('admin_init', 'check_contact_form_7_installed');
  
/*
//Menu registration
*/
function devolatunji_menus() {
  // register_nav_menu('primary', __('Primary Menu', 'devolatunji'));
  register_nav_menu('main-menu', __('Main Menu', 'devolatunji'));
  register_nav_menu('secondary-menu', __('Secondary Menu', 'devolatunji'));
}
add_action('after_setup_theme', 'devolatunji_menus');

/*========================================================================================================
THIS SCRIPTS ARE ONLY MEANT FOR DEBUGGING AND DEVELOPMENT ONLY
===========================================================================================================*/
add_filter('block_editor_settings_all', function($settings) {
    $settings['__experimentalFeatures']['preferences']['persistence'] = false;
    return $settings;
});








