# web-atm01
1 Make it a Node.js project with app.ts by giving the following command:

2 Install types for Node.js

  npm init -y
  npm i @types/node -D
3 Create .gitignore file

4 add node-modules in .gitignore file

5 Create file app.ts Give the following command: install

    npm i inquirer
    npm i --save-dev @types/inquirer
    npm install chalk
    npm i --save-dev @types/chalk
    npm i node-banner
    npm i gradient-string
    npm i --save-dev @types/gradient-string
6 create tsconfig.json file by run this command

        tsc --init
7 change in tscconfig.json file.

   "target": "es2020", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
      "module": "NodeNext", /* Specify what module code is generated. */
      "moduleResolution": "NodeNext", /* Specify how TypeScript looks up a file from a given module specifier. */
      "outDir": "./dist",
8 changes in package.json file

  "type": "module",
      "bin": "./index.js",
      "version": "1.0.1",
      "bin": {
        "multiply": "bin/index.js"
       },
9      create user.ts file1
10    creat atm.ts file 
11    create index.ts and add the following statement at the top of the code 
            #! /usr/bin/env node 
12    login to your npm account with your username and password 
13    run command for publishing your project on npm 
            npm publish
