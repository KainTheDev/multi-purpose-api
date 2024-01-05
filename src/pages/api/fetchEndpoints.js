// pages/api/example.js

import { readdirSync } from "fs";
import { join } from "path";
const {API_internal_use_only} = require('../../../config.json')

export default async function fetchEndpoints(req, res) {
  const authorize = req.headers.authorize
  const securityKey = process.env.securityKey
  if (!authorize || authorize.split(':')[1] !== securityKey) {
    await res.status(401).json({ error: 'Unauthorized.' });
    
  } else {
    const endpoints = readdirSync(join(process.cwd(), 'src', 'pages', 'api'))
    .map(endpoint => endpoint.split('.')[0])
    .filter(endpoint => !API_internal_use_only.includes(endpoint))
    await res.json({ endpoints })
  }
}
