var check = 1;

function onClickRecord() {
  if (check == 1) {
    check = 2;
  } else {
    location.replace('../html/RecordStep3.html');
  }
}

//init_Chart는 html이 모두 로드되었을때 실핵되도록 구성
function init_Chart(data,label) {
  var data = {
    labels: label, //하단 라벨은 요일을 표시
    datasets: [{
      label: 'magnitude', //방송사 채널을 표시
       //시청률을 표시
      backgroundColor: "rgba(75, 208, 133, 0.3)",
      data: data
    }]
  };
  var options = {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }],
      }
    };
  var ctx = document.getElementById('myChart').getContext('2d'); //html의 myChart를 가져와 ctx에 저장
  var lineChart = new Chart(ctx).Line(data, options);
}
