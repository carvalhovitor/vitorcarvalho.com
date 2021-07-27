<!DOCTYPE html>

<html lang="<?= site()->language()->code() ?>">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-85987481-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-85987481-1');
    </script>

    <meta charset="utf-8">
    <title><?= $site->title()->html() ?></title>
    <meta name="description" content="<?= $site->description() ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"/>
    <?= css('assets/css/index.css?1.1'); ?>
  </head>
  
  <body class="<?= str::slug($page->template()) ?>">