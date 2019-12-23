import { Request, Response, NextFunction} from "Framework"
import { HTTP400Error } from "utils/httpErrors"

export const checkSearchParams = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (!req.query.q) {
        throw new HTTP400Error("Missing q parameter")
    } else {
        next()
    }
}