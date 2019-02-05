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
    thumbnail: true,
    showThumbByDefault: false,
    fullScreen: true,
    hideBarsDelay: 1500,
    mousewheel: false,
    subHtmlSelectorRelative: true,
    counter: false,
    animateThumb: false
  });
});
