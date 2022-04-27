INSERT INTO departments(department_name)
VALUES ('Department Name');

INSERT INTO roles(title, salary, department_id)
VALUES ('Role Title', 50000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('First Name', 'Last Name', 1, 2);

SELECT * FROM 