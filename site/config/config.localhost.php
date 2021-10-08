<?php
// Enable Kirby StaticBuilder locally
c::set('staticbuilder', true);
// StaticBuilder requires Kirby’s cache to be disabled
c::set('cache', false);

c::set([
    'staticbuilder.assets' => ['assets', 'content']
]);

c::set('staticbuilder.filter', function($page) {
    if ($page->template() == 'schedules') {
        return [false, strval($page->parent())];
    }

    // Check our custom logic for project
    if ($page->intendedTemplate() == 'project') {
        return [false, 'Project pages are excluded from static build'];
    }

    // And fall back to the default logic for other pages
    return Kirby\StaticBuilder\Builder::defaultFilter($page);
});
