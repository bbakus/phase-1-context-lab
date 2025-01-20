



function createEmployeeRecord(employee){
    
    const employeeInfo = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeInfo

}

function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(employeeArray => createEmployeeRecord(employeeArray));
}


function createTimeInEvent(dateStamp) {    
    this.timeInEvents.push({
        type: "TimeIn",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    });
    return this;
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    });
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}


function findEmployeeByFirstName(employees, searchName) {
    return employees.find(employee => employee.firstName === searchName);
}

function calculatePayroll(payroll) {
    return payroll.reduce((total, employee) => {
      return total + allWagesFor.call(employee);
    }, 0);
  }



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

