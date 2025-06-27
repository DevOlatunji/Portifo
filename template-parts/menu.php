<nav class="navbar shadow-sm bg-dark">
    <div class="nav-container">
        <div class="nav-brand">
            <!-- <?php
            if (has_custom_logo()) {
                $logo_id = get_theme_mod('custom_logo');
                $logo_url = wp_get_attachment_image_src($logo_id, 'full')[0];
                echo '<a href="' . esc_url(home_url('/')) . '" class="site-logo"><img src="' . esc_url($logo_url) . '" alt="' . get_bloginfo('name') . '"></a>';
            }
            ?>
 -->

            <?php
            if (function_exists('the_custom_logo') && has_custom_logo()) {
                the_custom_logo();
            } else if(get_bloginfo('name')){
                echo '<a href="' . esc_url(home_url('/')) . '" class="site-title">' . '<h2 class="logo-text">'.get_bloginfo('name').'</h2>' . '</a>';
            }else{
                echo '<a href="' . esc_url(home_url('/')) . '" class="site-title">' . '<h2 class="logo-text">Dev <span class="text-white">Olatunji</span></h2>' . '</a>';
            }
            ?>
        </div>
        <a class="navbar-toggler" href="javascript:void(0)"><span class="fa fa-bars"></span></a>
        <div class="nav-menu-container">
            <div class="menu-div">
                <!-- <ul class="menu">
                    <li class="nav-item bg-none">
                        <a class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item bg-none">
                        <a class="nav-link">About Me</a>
                    </li>
                    <li class="nav-item bg-none">
                        <a class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item bg-none">
                        <a class="nav-link">Services</a>
                    </li>
                    <li class="nav-item bg-none">
                        <a class="nav-link">Contact Me</a>
                    </li>
                </ul> -->

                <?php
                wp_nav_menu([
                    'theme_location' => 'main-menu',
                    'menu_class'     => 'menu',
                    'container'      => false,
                    'walker'         => new Dev_Olatunji_Walker_Nav_Menu(),
                ]);
                ?>

            </div>
            <div class="cta">
                <a class="btn btn-lg btn-block btn-neutral" href="<?php echo esc_url(get_theme_mod('cta1_button_link', '#')); ?>">
                    <?php echo esc_html(get_theme_mod('cta1_button_text', 'Get Started')); ?>                  
                </a>
            </div>
        </div>
    </div>
</nav>