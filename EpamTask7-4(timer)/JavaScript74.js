var url;
var pageTime;
var timeOutID;
var pr;
//function PrintTime(t)
//{
//    return t;
//}

function NextPage(address) {
    location.assign(address);
}

function Progress(addr, time) {
    var a = "" + addr;
    if (a != "undefined") {
        url = "" + a;
    }

    var b = +time;
    if (pageTime == undefined) {
        pageTime = +b;
    }

    var bar = document.getElementById("LeftTime");
    bar.innerHTML = pageTime;
    pageTime--;

    if (pageTime > 0) {
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

