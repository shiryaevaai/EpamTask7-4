var url,
pageTime,
timeOutID,
pr,
but,
pause=false;
//function PrintTime(t)
//{
//    return t;
//}

function NextPage(address) {
    location.assign(address);
}

function Pause(addr) {
    if (!pause) {
        pause = true;
        but = document.getElementById("pause");
        but.innerHTML = "Продолжить";
        clearTimeout(timeOutID);
    }
    else {
        pause = false;
        but = document.getElementById("pause");
        but.innerHTML = "Остановить";
        Progress(addr, pageTime);
    }
}

function Progress(addr, time) {
    var a = "" + addr,
        b,
        bar;
    if (a.match(/.+\.html/)) {        
        url = "" + a;
    }
    
    b = +time;     

    if (pageTime === undefined) {
        
        pageTime = +b;
    }
    //alert("pageTime  "+pageTime );

    bar = document.getElementById("LeftTime");
    bar.innerHTML = pageTime;
    pageTime--;

    if (pageTime > 0) {
        //alert("continue ");
        timeOutID = setTimeout(Progress, 1000);
    }
    else {
        NextPage(url);
    }
}

function StopProgress() {
    clearTimeout(timeOutID);
    pageTime = undefined;
}

