const totp = require("totp-generator");
const fs = require("fs");
require("dotenv").config();

const userName = process.env.vpnuser;
const secret = process.env.secret;

const token = totp(secret, { digits: 6 });

fs.writeFileSync(
  "pass.txt",
  `${userName}
${token}`
);
