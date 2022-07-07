const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3003;

const sequelize = require("./config/connection.js");
const SequelizeStore = require("connect-session-sequelize")(session.store);

const sess = {
  secret: "",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine();
app.set();
app.use();
app.use();
app.use();
app.use();

app.use(session(sess));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
  sequelize.sync({ force: false });
});
