// Write your solution in this file!
var employee = {
    name: "Haleem",
    streetAddress:"Crenshaw",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmp = {...employee};
    newEmp[key] = value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newRoster = {...employee}
    delete newRoster[key];
    return newRoster;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}