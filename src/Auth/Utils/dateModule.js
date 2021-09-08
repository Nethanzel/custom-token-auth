function isDatePassed(endDate) {
    endDate = new Date(endDate);
    let Today = new Date();

    if(Today > endDate) {
        return true;
    }
    return false;
}

module.exports.isDatePassed = isDatePassed;