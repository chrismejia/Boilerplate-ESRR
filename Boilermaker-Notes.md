# Boilermaker

## React

<details>

- [x] Index HTML
  - There's a nice shortcut that's (as far as I know) built-in to **VSCode**: type `html` into a blank HTML and it gives you a blank HTML5 boilerplate.
- [ ] Basic Server
  - Skipped ahead to do dependencies.
- [x] Dev Dependencies
  - Added `babel-preset-env` and `babel-preset-stage-2` to the DevDepends
- [x] Reg Dependencies
  - Added `react`, `react-router`, and `react-dom` to render React goodness.
- [x] JS Entry Point - `index.js`
  - Decided to make a `client` folder to hold `app.js`
- [x] Webpack config file
  - Chose to stick to the recommended config.
- [x] `.babelrc`
  - Added presets of `react`, `env` and `stage-2` to the file.
- [x] `ReactDOM` render
  - `index.html` has a div id of `app` so we'll get that element and render to it.
- [x] Start scripts
  - See notes.
- [ ] Liftoff!
  - Jumped back to handle Express.

</details>

## Express

<details>

- [x] Install and choose entry point
  - Created two points:
    - Client: `client/index.js`
    - Server: `server/index.js`
- [x] Create an app
  - Two lines - done.
- [x] Logging Middleware
  - Chose `volleyball`; used during the senior-enrichment project.
- [x] Static Middleware
  - Made a note about `path`.
- [x] Parsing Middleware
  - Used built-in `express` parsers.
- [x] API Routes
  - Made an `api` folder
  - Linked routes to that `index` files
  - Converted functions to async arrow funcs
  - Added `try/catch` blocks
  - Added `next(error)` to `catch` segments
- [x] Handle 404s
  - Added to API index
- [x] Sending `index.html`
  - Added to `server.js`
- [x] Sending 500 Errors
  - Added to `server.js` file
- [x] Start the server
  - Created `main.js`
  - Required `app` from `server.js` where it was exported
  - Added `app.listen` and changed function to an arrow callback

</details>

## Testing the server

<details>

`ERROR in Entry module not found: Error: Can't resolve './index.js' in '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker'`

- Adjusted `package.json` to run `main.js`

`ENOENT: no such file or directory, stat '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/public/index.html'`

- Moved `index.html` to public folder

```js
ERROR in ./main.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
```

- Ran the command: `npm install --save-dev babel-loader@7`
  - Fixed that problem.
- Added `<h1>Welcome to the finest artisan-made boilerplate code.</h1>` to `index.html`

```js
WARNING in ./node_modules/express/lib/view.js 81:13-25
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/express/lib/application.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./server/server.js
 @ ./main.js

ERROR in ./node_modules/destroy/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/destroy'
 @ ./node_modules/destroy/index.js 14:17-30
 @ ./node_modules/send/index.js
 @ ./node_modules/express/lib/response.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./server/server.js
 @ ./main.js

ERROR in ./node_modules/etag/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/etag'
 @ ./node_modules/etag/index.js 22:12-25
 @ ./node_modules/express/lib/utils.js
 @ ./node_modules/express/lib/application.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./server/server.js
 @ ./main.js

ERROR in ./node_modules/express/lib/view.js
Module not found: Error: Can't resolve 'fs' in '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/express/lib'
 @ ./node_modules/express/lib/view.js 18:9-22
 @ ./node_modules/express/lib/application.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./server/server.js
 @ ./main.js

ERROR in ./node_modules/mime/mime.js
Module not found: Error: Can't resolve 'fs' in '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/mime'
 @ ./node_modules/mime/mime.js 2:9-22
 @ ./node_modules/send/index.js
 @ ./node_modules/express/lib/response.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./server/server.js
 @ ./main.js

ERROR in ./node_modules/send/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/send'
 @ ./node_modules/send/index.js 23:9-22
 @ ./node_modules/express/lib/response.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./server/server.js
 @ ./main.js

ERROR in ./node_modules/express/lib/request.js
Module not found: Error: Can't resolve 'net' in '/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/express/lib'
 @ ./node_modules/express/lib/request.js 18:11-25
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./server/server.js
 @ ./main.js
```

#### In Browser:

`bundle.js:1 Uncaught SyntaxError: Unexpected token <`

- Both to be handled later

</details>

## Redux

<details>

- [x] Install
  - Installed `redux`, `react-redux`, `redux-thunk` and `redux-logger`
- [x] Reducer
  - Created `reducer.js` in /client
  - Exported reducer
- [x] Store
  - Created `store.js` in /client
  - Imported reducer into store
- [x] Provider
  - Imported `Provider` and store; placed both in render

**STATUS:** Still functioning.

</details>

## CSS

<details>

- [x] Install
  - Installed `style-loader` and `css-loader`
- [x] Add to webpack config
  - Modified output section: `filename: "./public/bundle.js"`
    - Successfully moved the bundled output to the /public folder
- [x] Create Entry Point
  - Created `index.css` in public
- [x] Import into JS
  - Continuity error? Doesn't reflect the current state of our index.html to this point
  - Imported `index.css` into `client.js` in /client

</details>

## Interlude: Environment Variables

<details>

- Two articles to read later

</details>

## Sequelize

<details>

- [x] Create your database
  - `boilermaker` - best database name ever
- [x] Installing dependencies
  - Nothing strange here.
- [x] Create Sequelize instance
  - Create `models` folder in server
  - Create database.js in folder
  - Wrote a console.log using `chalk` to denote the opening of the db connection **IN COLOR**
- [x] Read Database URL from environment
  - Added database_url from env.
- [x] Define Your Models and Establish Associations
  - Created ModelOne and ModelTwo
  - Exported each out
  - Brought in via `/models/index.js`
- [x] Sync your database
  - Defined and destructured `db` from `/models/index.js`
  - Synced the db and then mention that db is connected.
  - Show us the link to the local devsite

</details>

## Here there be dragons! Authentication

<!-- <details> -->

- [x] Install
  - Installed with no issues.
- [x] Session Middleware
  - Installed with no issues.
- [x] Protect Session Secret
  - Installed with no issues.
- [x] Optional: Session Store

  - Started giving me a **massive** error:

  ```
  /Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/connect-session-sequelize/lib/connect-session-sequelize.js:51
    this.sessionModel = options.db.import(path.join(__dirname, 'model'))
                                         ^

  TypeError: options.db.import is not a function
  at new SequelizeStore (/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/node_modules/connect-session-sequelize/lib/connect-session-sequelize.js:51:44)
  at Object.<anonymous> (/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/server/server.js:25:17)
  at Module._compile (internal/modules/cjs/loader.js:689:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
  at Module.load (internal/modules/cjs/loader.js:599:32)
  at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
  at Function.Module._load (internal/modules/cjs/loader.js:530:3)
  at Module.require (internal/modules/cjs/loader.js:637:17)
  at require (internal/modules/cjs/helpers.js:20:18)
  at Object.<anonymous> (/Users/ChrisMejia/Google Drive/FS/Review-Week/Boilermaker/main.js:5:13)
  at Module._compile (internal/modules/cjs/loader.js:689:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
  at Module.load (internal/modules/cjs/loader.js:599:32)
  at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
  ```

- [x] Serialize/Deserialize User
  - Looks to be a class method on the model; placed in **both** modelOne and modelTwo files.
- [x] Encrypt Passwords
  - First time we've seen a Sequelize file so far; this one is fully structured.
  - Using the comprehensive solution as-is.
  - New errors from modelTwo where `passport` is present; required it there.
  - Still getting erros from the session store; app stopped running since that point.
- [x] Login
  - Placed in /api/routeOne.js
  - called in User model
  - Also called in crypto library
  - App still broken :(
- [x] Sign Up
  - Also placed into /api/routeOne.js
  - Still broken.
- [x] Log Out
  - Also placed into /api/routeOne.js
  - Yep, still broken.
- [x] Get Me
  - Installed with no issues.
- [x] Install
  - Installed with no issues.

</details>
