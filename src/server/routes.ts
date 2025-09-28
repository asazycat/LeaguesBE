import { Router } from "express";
import { getRoutes } from "./controller.js";


const apiRoutes: Router = Router()

apiRoutes.get('/', getRoutes)


export default apiRoutes