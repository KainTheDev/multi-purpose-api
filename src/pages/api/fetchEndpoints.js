// pages/api/example.js

import { readdirSync } from "fs";

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function handler(req, res) {
  try{
    const endpoints = readdirSync('src/pages/api').map(endpoint => endpoint.split('.')[0])
    await res.json({endpoints})
  }catch(e){
    await res.json({error: `${e}`})
  }
  }
  