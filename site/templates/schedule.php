<?php snippet('head'); ?>

    <header>
        <h1>Cronograma de desenvolvimento do livro &ldquo;<?= $page->title() ?>&rdquo; (<?= $page->year() ?>)</h1>
    </header>

    <main class="schedule">
        <div class="content-wrapper">
            <?php 
                $months = [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro',
                ];
            ?>

            <?php 
                $today = date('d');
                $currentMonth = date('m');
            ?>
        
            <?php foreach ($months as $key=>$month): ?>
                <?php if ($page->$month()->toStructure()->first()): ?> 
                    <?php $isCurrentMonth = $currentMonth == $key + 1; ?>

                    <section <?= (int)$key + 1 < $currentMonth ? ' class="past"' : '' ?>>
                        <h2><?= $month ?></h2>
                        <ul>
                            <?php foreach ($page->$month()->toStructure() as $date): ?>
                                <?php
                                    $from = $date->from();
                                    $to = $date->to();
                                    $class = ' class=' . ($isCurrentMonth && (($today >= $from && $today <= $to) || $today == $from) ? 'current' : (($today > $from && $isCurrentMonth) ? 'past' : ''));
                                ?>

                                <li <?= $class ?>><span><?= $from . ($to->isEmpty() ? '' : ' – ' . $to) ?></span> → <p><?= $date->description() ?></p></li>
                            <?php endforeach ?>
                        </ul>
                    </section>
                <?php endif ?>
            <?php endforeach ?>
        </div>
    </main>

<?php snippet('foot'); ?>