// Date 객체 생성
let date = new Date();
const month = date.getMonth();
const today = date.getDate();
document.querySelector('.today').textContent = `오늘 날짜 : ${today}일`;

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  // year-month 채우기
  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  // 지난 달 마지막 Date, 이번 달 마지막 Date
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  // Dates 기본 배열들
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  // prevDates 계산
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  // nextDates 계산
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
  }

  // Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);

  // Dates 안에 date 클래스 생성 중
  dates.forEach((date, i) => {
    dates[i] = `<div class="date" id="date${i}" onclick="dateClick(${i})">${date}</div>`;
  })

  // Dates 그리기
  document.querySelector('.dates').innerHTML = dates.join('');
}

renderCalendar();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

const goToday = () => {
  date = new Date();
  renderCalendar();
}

var newDate;
var newMonth;
var nowClick = newMonth+"-"+newDate;

function dateClick(dateNum){
  document.querySelector('.dateDisplay').textContent = `선택하신 날짜 :${month+1}월 ${dateNum-1}일`;
  newDate=dateNum;
  newMonth=month;
}

$('#input-data').click(function(){
  var data=$('#input-box').val();
  var dateElement = document.querySelector('#date'+newDate);
  var inputDiv = document.createElement("div");
  inputDiv.id="inputDiv";
  var inputContent = document.createTextNode(data);

  if(newDate-1 ==today){
  sessionStorage.setItem("오늘 할 일 입력 날짜" , newDate-1);
  sessionStorage.setItem("오늘 할 일 입력 일정" , data.toString());
  }

  inputDiv.appendChild(inputContent);
  dateElement.appendChild(inputDiv)

  clearInput();
});

function clearInput(){
  var element = $('#input-box');

  for(var i=0;i<element.length;i++){
    element[i].value='';
  }
}

$('.daily').click(function(){
  document.location.href="today.html";
})