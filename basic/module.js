/*
1. What is Module?
-  A module in Node.js is a reusable piece of code that can be exported and imported into other files. 
   It helps organize your code into smaller, manageable parts and promotes code reuse.

2. Types of Modules in Node.js
-  (i). Core Module : These are built into Node.js. You don’t need to install them or create them yourself.
    Examples of Core Modules include http, path, queryString,url and fs.
        fs: File system operations.
        http: Create web servers.
        path: Work with file and folder paths.
        url : URL parsing and creation.
        queryString : utility used for parsing and formatting URL query strings.

-  (ii) - Local Module : These are modules you create yourself in your project.
    You can create your own modules by creating a new JavaScript file and exporting functions or variables from it

-  (iii) - Third-Party Module :  These are modules created by others and shared via npm (Node Package Manager).
    You can install third-party modules using npm by running the command npm install <module-name> in
    your terminal.npm(Node Package Manager)
        Example:- 
            npm install express
            npm install ejs
            npm install body-parser


*/

// let fun ={
//     name : function(){
//         return "Hello user......";
//     },
//     currentDate : new Date().toLocaleDateString(),
//     arr : [1,2,3]
// }

// module.exports = fun 

let add = (a, b) => a + b;
// module.exports =  add ;


let fname = ()=>{
    return "Hello user......";
}

// module.exports = fname ;

module.exports = {add , fname}