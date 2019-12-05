// slick big
$((function() {
  $('.slick-big').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  })

  $('.join-us-form').validate({
    rules: {
      // simple rule, converted to {required:true}
      name: 'required',
      day: 'required'
      // compound rule
    },

    element: $('.join-us-form__item')
  })

  // slick small
  $('.slick-small').slick({
    arrows: true,
    prevArrow: `<img class="arrow-left" src="svg/arrow-prev.svg" alt="arrow-prev">`,
    nextArrow: `<img class="arrow-right" src="svg/arrow-next.svg" alt="arrow-next">`,
    dots: false,
    slidesToShow: 5
  })

  // validation
  $('#commentForm').validate()

  // checkboxes
  var checkBoxCool = $('.checkbox-item-box #i-am-cool')
  var checkBoxLife = $('.checkbox-item-box #life-is-good')

  $('.checkbox-item-box .amICool')
    .after()
    .click((function() {
      checkBoxCool.prop('checked', !checkBoxCool.prop('checked'))
    }))

  $('.checkbox-item-box .lifeIsGood')
    .after()
    .click((function() {
      checkBoxLife.prop('checked', !checkBoxLife.prop('checked'))
    }))

  // radio buttons
  $('.joys .tee')
    .after()
    .click((function() {
      $('.joys #tee')
        .not(':checked')
        .prop('checked', true)
    }))

  $('.joys .beer')
    .after()
    .click((function() {
      $('.joys #beer')
        .not(':checked')
        .prop('checked', true)
    }))

  // slider-line
  $('.slider-line').slider({
    range: true,
    values: [5, 50]
  })

  var circle = document.querySelectorAll('.circle')[0]
  var mask = document.querySelectorAll('.mask')[0]
  var left = document.querySelectorAll('.left')[0]
  var right = document.querySelectorAll('.right')[0]
  var range = document.getElementById('range')

  var hour = document.querySelectorAll('#hour')[0]

  var n
  changeHour()
  range.oninput = changeHour
  function changeHour() {
    hour.innerHTML = range.value
    n = range.value
    if (n <= 50) {
      left.style.webkitTransform = 'rotate(' + 3.6 * n + 'deg)'
      right.style.opacity = 0
      mask.style.opacity = 1
    } else {
      right.style.opacity = 1
      mask.style.opacity = 0
      left.style.webkitTransform = 'rotate(' + 180 + 'deg)'
      right.style.webkitTransform = 'rotate(' + 3.6 * n + 'deg)'
    }
  }
}))
