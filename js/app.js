//calls light Gallery and sets options
$(document).ready(function() {
  //catch error
  try {
    $('#imgwall').lightGallery();
    $('#imgwall')
      .data('lightGallery')
      .destroy(true);
  } catch (ex) {}

  $('#imgwall').lightGallery({
    thumbnail: false,
    showThumbByDefault: false,
    fullScreen: true,
    hideBarsDelay: 1500,
    mousewheel: false,
    subHtmlSelectorRelative: true,
    counter: false,
    animateThumb: false
  });
});

//navbar

var overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const wrapper = document.getElementById('wrapper');
const topbar = document.getElementById('topbar');
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

document.getElementById('open-menu').addEventListener('click', function() {
  wrapper.classList.add('hide');
  topbar.classList.add('hide');
  // document.getElementsByTagName('header').classList.add('hide');
  // els.classList.add('selected');
  // document.body.style.maxHeight = getVh();
  overlay.classList.add('show-menu');
  // console.log(current);
});

closeMenu.addEventListener('click', function() {
  overlay.classList.remove('show-menu');
  overlay.classList.add('close-menu');
  topbar.classList.remove('hide');
  wrapper.classList.remove('hide');
});

//sets navbar highlight
