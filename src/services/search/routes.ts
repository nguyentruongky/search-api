import { Request, Response, request } from "express"
import { RequestError } from "request-promise/errors"
import { getPlacesByName } from "./SearchController"

export default [
    {
        path: "/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello world!")
        }
    },
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            async ({ query }: Request, res: Response) => {
                const result = await getPlacesByName(query.q)
                res.status(200).send(result)
            }
        ]
    }
]