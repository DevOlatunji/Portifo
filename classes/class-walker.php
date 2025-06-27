<?php

class Dev_Olatunji_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = []) {
        $output .= '<ul class="submenu">';
    }

    function end_lvl(&$output, $depth = 0, $args = []) {
        $output .= '</ul>';
    }

    function start_el(&$output, $item, $depth = 0, $args = [], $id = 0) {
        $item_classes = is_array($item->classes) ? $item->classes : [];

        // Determine active class
        $is_active = in_array('current-menu-item', $item_classes) ? ' active' : '';

        // <li> element
        $output .= '<li class="nav-item bg-none">';

        // <a> element
        $output .= '<a class="nav-link' . $is_active . '"';
        $output .= $item->url ? ' href="' . esc_url($item->url) . '"' : '';
        $output .= '>' . esc_html($item->title) . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = []) {
        $output .= '</li>';
    }
}
