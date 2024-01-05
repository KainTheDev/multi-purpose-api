// pages/api/example.js

import {  readdirSync } from "fs";
import { join } from "path";

export default async function handler(req, res) {
  const securityKey = req.headers.key
  const securityKey_ENV = process.env.securityKey
  console.log(securityKey_ENV)
  if (!securityKey || securityKey !== securityKey_ENV) {
    await res.status(401).json({ error: 'Unauthorized.' });
    
  } else {
    const endpoints = readdirSync(join(process.cwd(), 'src', 'pages', 'api')).map(endpoint => endpoint.split('.')[0])
    await res.json({ endpoints })
  }
}
