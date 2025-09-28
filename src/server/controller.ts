

import type { Request, Response } from "express"

export const getRoutes = (req:Request, res: Response) => {
    console.log(req)
    res.json({})
}