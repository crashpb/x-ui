const oneMinute = 1000 * 60;  // milliseconds in a minute
const oneHour = oneMinute * 60;  // milliseconds in an hour
const oneDay = oneHour * 24;  // milliseconds in a day
const oneWeek = oneDay * 7;  // milliseconds in a week
const oneMonth = oneDay * 30;  // milliseconds in a month

/**
* Decrease by days
*
* @param days The number of days to decrement
*/
Date.prototype.minusDays=function(days){    
    return this.minusMillis(oneDay*days);  
};

/**
*Increase by days
*
* @param days The number of days to add
*/
Date.prototype.plusDays = function (days) {
    return this.plusMillis(oneDay * days);
};

/**
* Decrease by the hour
*
* @param hours Hours to decrement
*/
Date.prototype.minusHours = function (hours) {
    return this.minusMillis(oneHour * hours);
};

/**
*Increase by hour
*
* @param hours Hours to add
*/
Date.prototype.plusHours = function (hours) {
    return this.plusMillis(oneHour * hours);
};

/**
* Decrease by the minute
*
* @param minutes The number of minutes to decrease
*/
Date.prototype.minusMinutes = function (minutes) {
    return this.minusMillis(oneMinute * minutes);
};

/**
* increment by minute
*
* @param minutes The number of minutes to add
*/
Date.prototype.plusMinutes = function (minutes) {
    return this.plusMillis(oneMinute * minutes);
};

/**
* Decrement by milliseconds
*
* @param millis The number of milliseconds to decrement
*/
Date.prototype.minusMillis = function(millis) {
    let time = this.getTime() - millis;
    let newDate = new Date();
    newDate . setTime ( time ) ;
    return newDate;
};

/**
* increment by milliseconds
*
* @param millis The number of milliseconds to increment
*/
Date.prototype.plusMillis = function(millis) {
    let time = this.getTime() + millis;
    let newDate = new Date();
    newDate . setTime ( time ) ;
    return newDate;
};

/**
* Set the time to 00:00:00.000 of the current day
*/
Date.prototype.setMinTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

/**
* Set the time to 23:59:59.999 of the current day
*/
Date.prototype.setMaxTime = function () {
    this.setHours(23);
    this.setMinutes(59);
    this.setSeconds(59);
    this.setMilliseconds(999);
    return this;
};

/**
* format date
*/
Date.prototype.formatDate = function () {
    return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate());
};

/**
* format time
*/
Date.prototype.formatTime = function () {
    return addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
};

/**
* Format date and time
*
* @param split Separator between date and time, default is a space
*/
Date.prototype.formatDateTime = function (split = ' ') {
    return this.formatDate() + split + this.formatTime();
};

class DateUtil {

    // String to Date object
    static parseDate(str) {
        return new Date(str.replace(/-/g, '/'));
    }

    static formatMillis(millis) {
        return moment(millis).format('YYYY-M-D H:m:s')
    }

    static firstDayOfMonth() {
        const date = new Date();
        date.setDate(1);
        date.setMinTime();
        return date;
    }
}
