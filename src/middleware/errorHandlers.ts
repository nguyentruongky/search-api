import { Request, Response, NextFunction, Router } from "Framework"
import 'module-alias/register'
import * as ErrorHandler from "../utils/ErrorHandler"

const handle404Error = (router: Router) => {
    router.use((req: Request, res: Response) => {
        ErrorHandler.notFoundError(res)
    })
}

const handleClientErrors = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.clientError(err, res, next)
    })
}

const handleServerErrors = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.serverError(err, res, next)
    })
}

export default [handle404Error, handleClientErrors, handleServerErrors]