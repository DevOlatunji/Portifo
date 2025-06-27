<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php wp_title(); ?></title>
  <?php wp_head(); ?>
  <!-- <link rel="icon" href="assets/images/dev-icon.png"> -->
</head>
<body <?php body_class(); ?>>
  <?php get_template_part('template-parts/menu'); ?>
