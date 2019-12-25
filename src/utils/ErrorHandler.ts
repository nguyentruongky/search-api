import { Response, NextFunction } from "Framework"
import { HTTPClientError, HTTP404Error} from "./httpErrors"

export const notFoundError = (res: Response) => {
    res.status(404).send("Method not found.")
}

export const clientError = (err: Error, res: Response, next: NextFunction) => { 
    if (err instanceof HTTPClientError) {
        console.warn(err)
        res.status(err.statusCode).send(err.message)
    } else {
        next(err)
    }
}

export const serverError = (err: Error, res: Response, next: NextFunction) => {
    console.error(err)
    if (process.env.NODE_ENV === "production") {
        res.status(500).send("Internal Server Error")
    } else {
        res.status(500).send(err.stack)
    }
}