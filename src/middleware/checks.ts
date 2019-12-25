import { Request, Response, NextFunction} from "Framework"
import 'module-alias/register'

export const checkSearchParams = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (!req.query.q) {
        res.status(400).send("Missing q parameter")
    } else {
        next()
    }
}