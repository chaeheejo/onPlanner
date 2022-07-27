var link;
var getlink;
function writelink(){
    link = prompt("강의링크","강의 사이트 링크를 복사해서 붙여넣기 해주세요.");
    sessionStorage.setItem("강의링크" , link);
    getlink = sessionStorage.getItem("강의링크");
}

function golink(){
    window.open(getlink);
}