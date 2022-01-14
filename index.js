

function createEmployeeRecord(array) {
        const timeIn = [];
        const timeOut = [];
        const empRecord = Object.create({});
        empRecord.firstName = array[0];
        empRecord.familyName = array[1];
        empRecord.title = array[2];
        empRecord.payPerHour = array[3];
        empRecord.timeInEvents = timeIn;
        empRecord.timeOutEvents = timeOut;
        return empRecord;
};


function createEmployeeRecords(cersArray) {
    const empIndex = [];
    for (const element of cersArray) {
    const employeeRecord = createEmployeeRecord(element);
    empIndex.push(employeeRecord);
    };
    return empIndex;
};

function createTimeInEvent(empRec, stamp) {
    let timeStamp = stamp.split('');
    const dateArray = [];
    const timeArray = [];
    for (let i = 0; i < timeStamp.length; i++) {
        if (i < timeStamp.length - 5) {
            dateArray.push(timeStamp[i]);
        }
        else if (timeStamp[i] === ' ') {
        }
        else {
            timeArray.push(timeStamp[i]);
        };
    }
    let tempTime = timeArray.join('');
    let tempDate = dateArray.join('');
    let timeIn = Object.create({});
    timeIn.type = 'TimeIn';
    timeIn.hour = parseInt(tempTime);
    timeIn.date = tempDate;
    empRec.timeInEvents.push(timeIn);
    return empRec;
};

function createTimeOutEvent(empRec, stamp) {
    let timeStamp = stamp.split('');
    const dateArray = [];
    const timeArray = [];
    for (let i = 0; i < timeStamp.length; i++) {
        if (i < timeStamp.length - 5) {
            dateArray.push(timeStamp[i]);
        }
        else if (timeStamp[i] === ' ') {
        }
        else {
            timeArray.push(timeStamp[i]);
        };
    }
    let tempTime = timeArray.join('');
    let tempDate = dateArray.join('');
    let timeOut = Object.create({});
    timeOut.type = 'TimeOut';
    timeOut.hour = parseInt(tempTime);
    timeOut.date = tempDate;
    empRec.timeOutEvents.push(timeOut);
    return empRec;
};

function hoursWorkedOnDate(empRec, date) {
    if (date === empRec.timeOutEvents[0].date && empRec.timeInEvents[0].date) {
        let hoursWorked = empRec.timeOutEvents[0].hour - empRec.timeInEvents[0].hour;
        return hoursWorked / 100;
    }
};

function wagesEarnedOnDate(empRec, date) {
    let empHours = hoursWorkedOnDate(empRec, date);
    let tempHourly = empRec.payPerHour;
    let payOwed = empHours * tempHourly;
    return payOwed;
};

function allWagesFor(empRec) {
    let totalHours = 0;
    for (let i=0; i < empRec.timeInEvents.length; i++) {
        let hoursWorked = (empRec.timeOutEvents[i].hour - empRec.timeInEvents[i].hour) / 100;
        totalHours = totalHours + hoursWorked;
    }
    let totalOwed = totalHours * empRec.payPerHour;
    return totalOwed;
};

function calculatePayroll(empRecs) {
    let totalPayroll = 0;
    for (let emp of empRecs) {
        totalPayroll += allWagesFor(emp);
    }
    return totalPayroll;
};