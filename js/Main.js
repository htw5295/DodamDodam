var iconWidth = new Array();
var iconHeight = new Array();

window.onload = function() {
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 2258;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 4; i++) {
    iconWidth[i] = icon[i].width;
    iconHeight[i] = icon[i].height;
    icon[i].width = iconWidth[i] * widthRate;
    icon[i].height = iconHeight[i] * heightRate;
  }
}

window.onresize = function() {
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 2258;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 4; i++) {
    icon[i].width = iconWidth[i] * widthRate;
    icon[i].height = iconHeight[i] * heightRate;
  }
}
