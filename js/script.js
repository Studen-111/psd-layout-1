// Фильтрация фото из портфолио ================================================================================

$(document).on('click', '.filter__item', function() {
    var i = $(this).data('filter')
    if (i == 1) {
        $('.portfolio__column').show()
    } else {
        $('.portfolio__column').hide()
        $('.portfolio__column.f_' + i).show()
    }
    $('.filter__item').removeClass('active')
    $(this).addClass('active')

    return false
})

// ==============================================================================================================

// Параллакс-эффект ===============================================================================================

$(window).scroll(function() {
    var s = 0 - $(this).scrollTop() / 1.5
    $('.mainblock__image').css('transform', 'translate3d(0, ' + s + 'px , 0)')
})
