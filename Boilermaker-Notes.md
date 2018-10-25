# Boilermaker

## React

<!-- <details> -->

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

## Express

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

## Testing the server

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

## Redux

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

## CSS

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

## Interlude: Environment Variables

<!-- </details> -->
