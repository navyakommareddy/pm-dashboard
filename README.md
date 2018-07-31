# README #

### What is this repository for? ###

A barbones node.js server with webpack set up.

### How do I get set up? ###

Start by `curl --user <username>:<password> https://bitbucket.org/cgis_development/node-scaffolding.git/get/master.zip > node-scaffolding.zip`

Afterwards, unzip the folder and rename it to the desired project.

You should be able to run `yarn` or `yarn install`
to install the dependecies.

Type `npm start` to spin up the application and webpack-dev-server. This should also start [AVA](https://github.com/avajs/ava) for automated testing.

### Recommended ###

You can set up aliases in webpack.config.js; There are some examples commented out.

This will allow importing from your directory structure logically without having to type the whole path.

These are some example aliases we've found to be helpful:
```javascript
'Tejas': path.resolve( __dirname, './Client/scripts/Tejas' ),
'Redux': path.resolve( __dirname, './Client/scripts/Redux' ),
'Config': path.resolve( __dirname, './Client/config.js' ),
'Styles': path.resolve( __dirname, './Client/styles' ),
'Utilities': path.resolve( __dirname, './Client/scripts/Utilities' ),
'Components': path.resolve( __dirname, './Client/scripts/Components' )
```
With Aliasing:
```javascript
import {
    BarChart
} from 'Components/Barchart/component.jsx'
```

vs.

Without Aliasing:
```javascript
import {
    BarChart
} from './Client/scripts/Components/Barchart/component.jsx'
```

### Reminder ###

Be sure to change the directory name as well as set up the correct remotes.
Don't forget to change the name in the package.json!