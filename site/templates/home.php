<?php snippet('head'); ?>

  <body>

    <div class="wrapper">

    <header>

        <section class="about-wrapper">

          <p class="about"><?= $site->description()->html() ?></p>

          <section class="contact">
            <p>Belo Horizonte, Brasil</p>
            <p>+55 31 971 711 080</p>
            <p><a target="_blank" href="mailto:vitor@vitorcarvalho.net">vitor@vitorcarvalho.net</a></p>
          </section>

        </section>

        <nav class="language-change">
          <?php foreach($site->languages() as $language): ?>
            <a <?= e($site->language() == $language, ' class="active"') ?> href="<?= $language->url() ?>"> <?= html($language->name()) ?></a>
          <?php endforeach ?>
        </nav>
        
    </header>

    <main>

    <aside id="aside">

        <div>
        
            <!-- <p><a href="#about">Vitor Carvalho</a></p> -->

            <nav id="menu">

              <ul id="project-list">
                <?php $projects = $page->children()->visible(); ?>

                <?php foreach($projects as $project): ?>
                    <li><a href="#<?= str::slug($project->title()); ?>"><?= $project->title(); ?></a></li>
                <?php endforeach ?>
              </ul>
            </nav>

        </div>
        
    </aside>


      <div class="content-wrapper">
        
        <section class="projects" id="projects">

          <?php $projects = $page->children()->visible(); ?>

          <?php foreach($projects as $project): ?>

            <div class="project" id="<?= str::slug($project->title()); ?>">

              <article>

                  <div class="project-description">
                      <h3 class="title"><?= $project->title(); ?></h3>
                      <?php echo $project->text()->kirbytext() ?>
                  </div>

                  <div class="images">
                    <?php foreach($project->images()->sortBy('sort', 'asc') as $image): ?>

                      <div class="image-wrapper">
                        <picture>
                            <source data-srcset="<?php echo thumb($image, array('width' => 1280, 'quality' => 100))->url(); ?> 1x, <?= $image->url(); ?> 2x" />
                            <img class="lazyload" alt="<?= $image->alt()->html() ?>">
                            <!-- <div class="loading-animation"></div> -->
                        </picture>

                      </div>

                    <?php endforeach ?>
                  </div>

              </article>

            </div>

          <?php endforeach ?>

        </section>

      </div>

    </main>

    <footer>
    
        <a href="#about">
            <svg preserveAspectRatio="none" width="30" height="60">
              <polyline points="5,15 15,0 25,15"/>
              <line x1="15" y1="0" x2="15" y2="100"/>
            </svg>
        </a>
        
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <?php echo krb(['assets/js/plugins.js', 'assets/js/index.js'], 'js', 1.2, false, false, false); ?>
   
    </body>
</html>