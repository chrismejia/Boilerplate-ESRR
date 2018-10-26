// sequelize instance being output at index.js
const { db } = require("./server/models/index.js");

// express server file location
const app = require("./server/server.js");

const port = process.env.PORT || 1234; // this can be very useful if you deploy to Heroku!

db.sync().then(() => {
  // Tell us that things got synced and that we're still connected.
  console.log(`\nConnection to 'boilermaker' established.`);

  // Let us visit the site.
  app.listen(port, () => {
    console.log(`

  ███╗   ██╗███████╗██╗    ██╗     █████╗ ██████╗ ██████╗
  ████╗  ██║██╔════╝██║    ██║    ██╔══██╗██╔══██╗██╔══██╗
  ██╔██╗ ██║█████╗  ██║ █╗ ██║    ███████║██████╔╝██████╔╝
  ██║╚██╗██║██╔══╝  ██║███╗██║    ██╔══██║██╔═══╝ ██╔═══╝
  ██║ ╚████║███████╗╚███╔███╔╝    ██║  ██║██║     ██║
  ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝     ╚═╝  ╚═╝╚═╝     ╚═╝

  Now listening on port ${port}.

  http://localhost:${port}/
    `);
  });
});
