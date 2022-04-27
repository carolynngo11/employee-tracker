const mysql = require('mysql2');
const inquirer = require('inquirer');
// require('dotenv').config();
// const queryFunctions = require('./queryFunctions')
// const { allDepts } = require('./queryFunctions')

// Connect to database
const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       port: 3306,
//       user: 'root',
//       password: 'root',
//       database: 'emp_db'
//     },
//  console.log(`Connected to the database.`)
);

console.table(
  "\n------------ W e l c o m e  t o  E m p l o y e e  T r a c k e r ------------\n"
)

// const opt = ["ALL_DEPT", "ALL_ROLES"];
function startApp() {
    inquirer.prompt([
      {
        type: "list",
        name: "userView",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View Departments",
            "Add Department",
            "Quit"
          ]
      }
  ])

// EXAMPLE
// .then((ans) => {
//     console.log(ans);
//     switch (ans.userview) {
//         case opt[0]:
//             // queryFunctions.allDepts();
//             allDepts();
//             break;

//         default:
//             break;
//     }
// })

    .then(function (val) {
        switch (val.choice) {
          case "View All Employees":
            viewAllEmployees();
            break;
            
          case "Add Employee":
            addEmployee();
            break;

          case "Update Employee Role":
            updateEmployeeRole();
            break;           
                
          case "View All Roles":
            viewAllRoles();
            break;

          case "Add Role":
            addRole();
            break;

          case "View Departments":
            viewDepartments();
            break;

          case "Add Department":
            addDepartment();
            break;

          case "quit":
            end();
        }
    })
  } 
  
// EXAMPLE
// function allDepts() {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//         startApp();
//     });

function viewAllEmployees() {
  db.query("SELECT employee.first_name, employee.last_name FROM employee",
  function(err, res) {
    console.log(res); 
    startApp();
});
}

function viewAllRoles() {
  db.query("SELECT * FROM employee",
  function(err, res) {
    console.log(res); 
    startApp();
});
}

function viewDepartments() {
  db.query("SELECT * FROM repartments",
  function(err, res) {
    console.log(res); 
    startApp();
});

function addEmployee () {
  

};

function addRole () {

};

function addDepartment() {

};

function updateEmployeeRole () {

};

}
startApp();

