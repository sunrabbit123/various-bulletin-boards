import { app } from "./src";
import { MySQL } from "fxsql";

import configDb from "./config.db";
const { CONNECT } = MySQL;
const POOL = CONNECT(configDb);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server is running -> http://localhost:${PORT}`);
});
