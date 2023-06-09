import { writeFile } from "node:fs";

writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("The file has been saved.");
  }
);

import { readFile } from "node:fs";

readFile("employees.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

import { appendFile } from "node:fs";

appendFile(
  "employees.json",
  '\n{"name": "Employee 2 Name", "salary": 3000}',
  "utf-8",
  (err) => {
    if (err) throw err;
    console.log("The file has been updated.");
  }
);

// import { unlink } from "node:fs";

// unlink("employees.json", (err) => {
//   if (err) throw err;
//   console.log("The file has been removed.");
// });
