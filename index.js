const timeIn = [];
const timeOut = [];

function createEmployeeRecord(array) {
        
        const empRecord = Object.create({});
        empRecord.firstName = array[0];
        empRecord.familyName = array[1];
        empRecord.title = array[2];
        empRecord.payPerHour = array[3];
        empRecord.timeInEvents = timeIn;
        empRecord.timeOutEvents = timeOut;
        // console.log(empRecord);
        return empRecord;
};


function createEmployeeRecords(cersArray) {
    const empIndex = [];
    // console.log(cersArray);
    for (const element of cersArray) {
        // console.log(element);
    const employeeRecord = createEmployeeRecord(element);
    empIndex.push(employeeRecord);
    };
    // console.log(empIndex);
    return empIndex;
};

function createTimeInEvent(empRec, stamp) {
    console.log(empRec);
    let timeIn = stamp.split('');
    const dateArray = [];
    const timeArray = [];
    for (let i = 0; i < timeIn.length; i++) {
        if (i < timeIn.length - 5) {
            dateArray.push(timeIn[i]);
        }
        else if (timeIn[i] === ' ') {
        }
        else {
            timeArray.push(timeIn[i]);
        };
    }
    timeIn = JSON.stringify(timeArray);
    
    console.log(timeIn);
    return empRec;
};

function createTimeOutEvent() {
    
};

function hoursWorkedOnDate() {

};

function wagesEarnedOnDate() {

};

function allWagesFor() {

};

function calculatePayroll() {

};