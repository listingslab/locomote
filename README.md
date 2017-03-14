![alt text](https://raw.githubusercontent.com/listingslab/locomote/master/public/img/locomote_256.png "Locomote FlightSearch Logo")
# JavaScript coding task for Locomote (1.0.4)


## The Challenge
Build a flight search interface as per this brief: http://node.locomote.com/code-task/

---

## /src folder

Contains the uncompiled Source of the front end JavaScript application. Written in ES6,
webpack watches for changes and compiles it using Babel to transpile it into minified ES5
code ready for production.

## Developer Installation

Clone the repository & cd to directory and run start.sh to install dependencies, then run `npm start` to start the server on http://localhost:3000/ and open that url in your default browser. Running `npm run open` will open the browser for you

Then run

`npm run dev` to start webpack in watching mode which will recompile the JavaScript app on change

### NPM Scripts

`npm start`
Runs Koa server on port 3000 on localhost

`npm run open`
Runs Koa server on port 3000 on localhost and opens the browser to http://localhost:3000/

`npm run dev`
Starts webpack in watch mode.

---

### Using Atom editor?

Install IDE linting. It's proper helpful

`apm install linter-eslint`

`apm install linter-stylelint`
