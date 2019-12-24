import express, { Router } from "Framework"
import request from "supertest"
import 'module-alias/register'
import { applyMiddleware, applyRoutes } from "@/utils"
import promiseRequest from "request-promise"
import middleware from "@/middleware"
import errorHandlers from "@/middleware/errorHandlers"
import routes from "@/services/search/routes"

jest.mock("request-promise");

(promiseRequest as any).mockImplementation(() => '{"features": []}')

describe("routes", () => {
    let router: Router
    beforeEach(() => {
        router = express()
        applyMiddleware(middleware, router)
        applyRoutes(routes, router)
        applyMiddleware(errorHandlers, router)
    })

    test("A valid query string", async () => {
        const response = await request(router).get("/api/v1/search?q=Cham")
        expect(response.status).toEqual(200)
    })

    test("A non-existing api method", async () => {
        const response = await request(router).get("/api/v11/search")
        expect(response.status).toEqual(404)
    })

    test("An empty query string", async () => {
        const response = await request(router).get("/api/v1/search?q=")
        expect(response.status).toEqual(400)
    })
})