# hidden-university

# Project setup

1.  npm init -y (npm initialization)
2.  npm install mongoose --save (mongoose installation)
3.  npm i express (express installation)  
    npm i --save-dev @types/express
4.  npm install -D typescript (typescript installation)  
    tsc --init  
    rootDir and outDir setup
5.  npm i dotenv (dotenv installation)
6.  npm i cors (cors installation)  
    npm i @types/cors
7.  npm i ts-node-dev --save-dev (for run app when developing)
8.  npm i zod (zod validator installation)
9.  npm i http-status (for http-status code)
10. mongodb connection (database connection)
11. eslint installation

    1.  add these two lines inside tsconfig.json file  
        "include": ["src"], // which files to compile  
        "exclude": ["node_modules"], // which files to skip
    2.  npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
    3.  npx eslint --init
    4.  add (inside eslintrc.json file)  
         "rules": {  
        "no-unused-vars": "error",  
        "no-unused-expressions": "error",  
        "prefer-const": "error",  
        "no-console": "error",  
        "no-undef": "error"  
        },  
        "globals": {  
        "process": "readonly"  
        }
    5.  create .eslintignore file and add those files inside the file:  
        node_modules  
        dist

12. prettier installation
    1.  npm install --save-dev prettier
    2.  create .prettierrc.json file and add this:  
         {  
        "semi": true,  
        "singleQuote": true  
        }
    3.  add this into package.json file  
        "prettier": "prettier --ignore-path .gitignore --write \"./src/\*_/_.+(js|ts|json)\""
    4.  add this into settings.json  
        "editor.defaultFormatter": "esbenp.prettier-vscode",  
        "editor.formatOnSave": true,
    5.  to avoid eslint and prettier conflict  
        npm install --save-dev eslint-config-prettier
    6.  add this into .eslintrc.json file  
        "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    7.  add this two inside package.json file  
        "prettier:fix": "npx prettier --write src",  
         "lint:fix": "npx eslint src --fix",

# project work p-1

1. Inside src folder in root app.ts, server.ts & config folder created and .env file added in root,  
   config folder includes index.ts file
2. 
