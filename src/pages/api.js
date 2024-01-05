// pages/api/example.js

import { env } from "../../next.config";
import fetchEndpoints from "./api/fetchEndpoints";

export default async function handler(req, res) {
    req.headers.authorize = `authorize:${env.securityKey}`
    fetchEndpoints(req, res)
}
