var iconSize = 318;

window.onload = function() {
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 1861;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 8; i++) {
    icon[i].width = iconSize * widthRate;
    icon[i].height = iconSize * heightRate;
  }
}

window.onresize = function() {
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 2258;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 4; i++) {
    icon[i].width = iconSize * widthRate;
    icon[i].height = iconSize * heightRate;
  }
}

function onClickStroy() {
  location.replace('../html/RecordStep2.html');
}
