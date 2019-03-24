//calls light Gallery and sets options
$(document).ready(function() {
  //loading
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 3500);

  //set lightGallery calls:
  try {
    $('#imgwall').lightGallery();
    $('#imgwall')
      .data('lightGallery')
      .destroy(true);
  } catch (ex) {}

  $('.imgwall').lightGallery({
    thumbnail: false,
    showThumbByDefault: false,
    fullScreen: true,
    hideBarsDelay: 1500,
    mousewheel: false,
    subHtmlSelectorRelative: true,
    counter: false,
    animateThumb: false,
    videoMaxWidth: '85%'
  });
  $('#playContainer').lightGallery({
    thumbnail: false,
    showThumbByDefault: false,
    fullScreen: true,
    hideBarsDelay: 1500,
    mousewheel: false,
    subHtmlSelectorRelative: true,
    counter: false,
    animateThumb: false,
    videoMaxWidth: '85%',
    vimeoPlayerParams: { autoplay: true }
  });
});

//navbar

var overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const wrapper = document.getElementById('wrapper');
const centerWrapper = document.getElementById('centerWrapper');
const topbar = document.getElementById('topbar');
const root = document.getElementsByTagName('html')[0];
const current = window.location.href;
let els = document.querySelectorAll(`a[href='${current}']`);
// get viewport height
function getVh() {
  let h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return h;
}

// document.body.classList.add('fade-out');
// window.addEventListener('load', e => {
//   document.body.classList.remove('fade-out');
// });

document.getElementById('open-menu').addEventListener('click', function() {
  wrapper.classList.add('hide');
  topbar.classList.add('hide');
  if (centerWrapper) {
    centerWrapper.classList.add('hide');
  }
  // document.getElementsByTagName('header').classList.add('hide');
  // els.classList.add('selected');
  // document.body.style.maxHeight = getVh();
  overlay.classList.add('show-menu');
  document.body.classList.add('set-background-blueish');
  document.body.classList.add('lock-scroll');
  root.classList.add('lock-scroll');

  // console.log(current);
});

closeMenu.addEventListener('click', function() {
  overlay.classList.remove('show-menu');
  overlay.classList.add('close-menu');
  topbar.classList.remove('hide');
  wrapper.classList.remove('hide');
  if (centerWrapper) {
    centerWrapper.classList.remove('hide');
  }
  document.body.classList.remove('set-background-blueish');
  document.body.classList.remove('lock-scroll');
  root.classList.remove('lock-scroll');
});

// Smooth Scrolling
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(
  function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  }
);
