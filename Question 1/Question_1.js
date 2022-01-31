function getDateTime() {
    var now = new Date();
    var day = now.getDay();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    if (day.toString().length == 1) {
        day = +day;
    }
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (date.toString().length == 1) {
        date = '0' + date;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    var dateTime = year + ' / ' + month + ' / ' + date + ' ' +'Time :' + hour + ':' + minute;
    return dateTime;
}

// example usage: realtime clock
setInterval(function () {
    currentTime = getDateTime();
    document.getElementById("id1").innerHTML = currentTime;
}, 1000);

alert(getDateTime());