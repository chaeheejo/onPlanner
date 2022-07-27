getEvent = sessionStorage.getItem("오늘 할 일 입력 일정");

if(getEvent != null){
  document.write("-"+getEvent);
}