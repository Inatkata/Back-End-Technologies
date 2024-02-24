function assignPersonalNumbers(employeeNames) {
    const employees = {};

    for (let name of employeeNames) {
        const personalNum = name.length;
        employees[name] = personalNum;
    }

    for (let name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}