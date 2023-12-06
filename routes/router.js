import { Router } from "express";
import { findJioLocation } from "../output/output.js";

const route = Router()
route.post('/latAndLong',findJioLocation)


export default route;