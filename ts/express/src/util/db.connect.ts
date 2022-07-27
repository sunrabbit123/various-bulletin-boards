import { MySQL } from "fxsql";

import configDb from "../../config.db";

const { CONNECT } = MySQL;
const POOL = CONNECT(configDb);
export default POOL;
