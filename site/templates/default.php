<?php snippet('head'); ?>

<section class="error">
    <h1><?= $site->find('error')->text()->kirbytext() ?></h1>
</section>

<?php snippet('foot'); ?>