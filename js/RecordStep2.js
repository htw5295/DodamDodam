var check = 1;

var width = 368;
var height = 169;

window.onload = function() {
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 1861;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 2; i++) {
    icon[i].width = iconSize * widthRate;
    icon[i].height = iconSize * heightRate;
  }

}

window.onresize = function() {
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 2258;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 2; i++) {
    icon[i].width = width * widthRate;
    icon[i].height = height * heightRate;
  }

}
function onloadChange(){
  document.getElementsByClassName("Bg")[0].style.height = document.getElementById("bg").height+"px";
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 2258;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 2; i++) {
    icon[i].style.width = width * widthRate+"px";
    icon[i].style.height = height * heightRate*2+"px";
  }
}
function sizeChange(){
  document.getElementsByClassName("Bg")[0].style.height = document.getElementById("bg").height+"px";
  var widthRate = $('#bg').width() / 1920;
  var heightRate = $('#bg').height() / 2258;

  var icon = document.getElementsByClassName('Icon');

  for (var i = 0; i < 2; i++) {
    icon[i].style.width = width * widthRate+"px";
    icon[i].style.height = height * heightRate*2+"px";
  }
}

function onClickRecord() {
  if (check == 1) {
    document.getElementById('start_button').style.display = "none";
    document.getElementById('finish_button').style.display = "block";
    check = 2;
  } else {
    location.replace('../html/RecordStep3.html');
  }
}
