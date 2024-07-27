console.log("welcome! To Employee Management System");

/* 
Create an Employee Object:

Define an object template for an employee containing attributes like name, age, department, and salary.
Each employee should be represented as an object with these attributes.

**/

//Create an Employee Object:
function Employee(name, age, department, salary) {
  this.name = name;
  this.age = age;
  this.department = department;
  this.salary = salary;
}

//Calculate Average Salary:

function calculateAverageSalary(employees) {
  if (employees.length === 0) return 0;
  const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );
  return totalSalary / employees.length;
}

// Find Employees in a Department:

function findEmployeesInDepartment(employees, department) {
  return employees.filter((employee) => employee.department === department);
}

//Increase Salary for Employees:

function increaseSalary(employees, percentageIncrease) {
  return employees.map((employee) => {
    employee.salary += employee.salary * (percentageIncrease / 100);
    return employee;
  });
}
// Sort Employees by Age

function sortEmployeesByAge(employees) {
  return employees.slice().sort((a, b) => a.age - b.age);
}
// employees

const employees = [
  new Employee("Durga", 30, "HR", 50000),
  new Employee("Naik", 25, "Engineering", 60000),
  new Employee("Krishna", 35, "HR", 55000),
  new Employee("Ram", 40, "Engineering", 70000),
];

// Calculate average salary
const averageSalary = calculateAverageSalary(employees);
console.log("Average Salary:", averageSalary);

// Find employees in the HR department
const hrEmployee = findEmployeesInDepartment(employees);
console.log("HR Department:", hrEmployee);

// Increase salary by 10%
const salaryInc = increaseSalary(employees);
console.log("Increase Salary:", salaryInc);

// Sort employees by age
const employeeAge = sortEmployeesByAge(employees);
console.log("Sort employee age:", employeeAge);
