// const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();
// const queryFunctions = require('./queryFunctions')
const { allDepts } = require('./queryFunctions')
// Connect to database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         // MySQL username,
//         // port: 3306,
//         user: 'root',
//         password: 'root',
//         database: 'emp_tracker_db'
//     },
//     console.log(`Connected to the database.`)
// );
const opt = ["ALL_DEPT", "ALL_ROLES"];
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
                "Add Department"
            ]
        }
    ])

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
        }
    })
    
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
}

startApp();

// function allDepts() {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//         startApp();
//     });
// }


