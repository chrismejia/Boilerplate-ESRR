const app = require("./server/server");

const port = process.env.PORT || 1234; // this can be very useful if you deploy to Heroku!

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
