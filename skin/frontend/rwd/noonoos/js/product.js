/*----------  Product page. Gallery. Open active image in new tab  ----------*/

$j(function() {
    $j('.full-size-image').on('click', function() {
        var url = $j('.gallery-image.visible').prop('src');
        window.open(url);
    });
});

/*----------  Product page. Description. Scroll arrows  ----------*/

$j(function() {
    var $parent = $j('.product-view .description-wrap'),
        elHeight = $parent.children('.std').height();

    if (elHeight > 220) {
        OverlayScrollbars($parent, {});

    }
});
