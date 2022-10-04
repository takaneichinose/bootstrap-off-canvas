'use strict'

$(function() {
  $('.off-canvas').on('show.bs.off-canvas', function() {
    $(this).addClass('active')
  })

  $('.off-canvas').on('hide.bs.off-canvas', function() {
    $(this).removeClass('active')
  })

  $('.off-canvas-toggler').on('click', function(evt) {
    evt.stopPropagation()
    evt.preventDefault()

    let elm = $(this).data('target')

    if (!$(elm).hasClass('active')) {
      $(elm).trigger('show.bs.off-canvas')
    }
    else {
      $(elm).trigger('hide.bs.off-canvas')
    }
  })

  $('.off-canvas-content:not(.off-canvas-no-close)').on('click', function(evt) {
    let elm = $(this).data('target')

    if ($(elm).hasClass('active')) {
      evt.stopPropagation()

      $(elm).trigger('hide.bs.off-canvas')
    }
  })
})
