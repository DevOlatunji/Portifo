<header>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-lg-5 col-md-6 col-sm-12 p-3 mb-3">
        <span class="h6 text-white">
          <?php echo esc_html(get_theme_mod('hero_heading', 'Hi There,')); ?>
        </span>
        <p class="typing-text display-5 fw-bold" id="typing-text">
          <?php echo esc_html(get_theme_mod('hero_subtext', 'I am Dev Olatunji.')); ?>
        </p>
        <p class="text-muted mb-4">
          <?php echo esc_html(get_theme_mod('hero_description', 'Smart businesses hire me to create systems...')); ?>
        </p>
        <a class="btn btn-neutral btn-lg" href="<?php echo esc_url(get_theme_mod('hero_button_link', '#services')); ?>">
          <?php echo esc_html(get_theme_mod('hero_button_text', 'Get Started')); ?>
        </a>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-12 p-3 mb-3">
        <?php if ($img = get_theme_mod('hero_image')) : ?>
          <img src="<?php echo esc_url($img); ?>" class="img-fluid rounded" alt="Hero Image">
        <?php endif; ?>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-12 p-3 mb-3">
        <div class="card text-start p-3">
          <div class="mb-3">
            <h4><?php echo esc_html(get_theme_mod('hero_years', '5+')); ?></h4>
            <p>Years of experience</p>
          </div>
          <hr>
          <div class="mb-3">
            <h4><?php echo esc_html(get_theme_mod('hero_jobs', '200+')); ?></h4>
            <p>Jobs delivered and profiting</p>
          </div>
          <hr>
          <div class="mb-3">
            <h4><?php echo esc_html(get_theme_mod('hero_clients', '99%')); ?></h4>
            <p>Of clients satisfied</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
