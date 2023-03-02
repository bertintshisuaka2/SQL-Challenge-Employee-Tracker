INSERT INTO department (name)
VALUES ('Engineering'), 
       ('Marketing'),
       ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES ('Software Developer', 100000, 1),
       ('Marketing Analyst', 75000, 2), 
       ('Accountant', 80000, 3),
       ('Lead Developer', 120000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Ash', 'Ketchum', 2, NULL),
       ('Grace', 'kabuika', 4, NULL),
       ('Ben', 'Tshisuaka', 1, 2),
       ('Bertin', 'Tshisuaka', 1, 2);