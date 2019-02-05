//calls light Gallery and sets options
$(document).ready(function() {
  $("#imgwall").lightGallery({
    thumbnail: true,
    showThumbByDefault: false,
    fullScreen: true,
    hideBarsDelay: 1500,
    mousewheel: false,
    subHtmlSelectorRelative: true
  });
});
