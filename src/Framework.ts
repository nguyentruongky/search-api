import FW from "express"

export interface Request extends FW.Request {}
export interface Response extends FW.Response {}
export interface Router extends FW.Router {}
export interface NextFunction extends FW.NextFunction {}
export default FW