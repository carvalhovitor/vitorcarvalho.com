<?php snippet('head'); ?>

  <div class="wrapper">
    <header>
        <section class="about-wrapper">
          <p class="about"><?= $site->description()->html() ?></p>

          <section class="contact">
            <p><?= $site->location() ?></p>
            <p><?= $site->phone() ?></p>
            <p><a target="_blank" href="mailto:<?= $site->email() ?>"><?= $site->email() ?></a></p>
            <p><a target="_blank" href="https://instagram.com/vitorcarvalho">ig/vitorcarvalho</a></p>
          </section>
        </section>

        <nav class="language-change">
          <?php foreach($site->languages() as $language): ?>
            <a <?= e($site->language() == $language, ' class="active"') ?> href="<?= $language->url() ?>" hreflang="<?= $language->code() ?>"><?= html($language->name()) ?></a>
          <?php endforeach ?>
        </nav>
    </header>

    <main>
      <aside id="aside">
          <div>
              <nav id="menu">
                <ul id="project-list">
                  <p><?= page()->title()->upper() ?></p><br>
                  
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
                      <?= $project->text()->kirbytext() ?>
                  </div>
                  
                  <div class="images">
                    <?php foreach($project->images()->sortBy('sort', 'asc') as $image): ?>
                      <div class="image-wrapper">
                        <picture>
                            <source data-srcset="<?= thumb($image, array('width' => 300, 'quality' => 100))->url(); ?> 300w, <?= thumb($image, array('width' => 520, 'quality' => 100))->url(); ?> 520w, <?= thumb($image, array('width' => 800, 'quality' => 100))->url(); ?> 800w, <?= thumb($image, array('width' => 1280, 'quality' => 100))->url(); ?> 1280w, <?= $image->url(); ?> 1920w" />
                            <img style="opacity: 0" class="lazyload" alt="<?= $image->alt()->html() ?>">
                        </picture>
                      </div>
                    <?php endforeach ?>
                  </div>
              </article>
            </div>
          <?php endforeach ?>
        </section>
      </div>
      
      <a id="arrow" href="#">
          <svg preserveAspectRatio="none" width="30" height="80">
          <polyline points="5,15 15,0 25,15"/>
          <line x1="15" y1="0" x2="15" y2="80"/>
          </svg>
      </a>
    </main>
  </div>

<?php snippet('foot'); ?>