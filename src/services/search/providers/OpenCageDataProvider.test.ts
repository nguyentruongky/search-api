import request from "request-promise"
import * as Provider from "./OpenCageDataProvider"

jest.mock("request-promise")

describe("OpenCageDataProdiver", () => {
    test("An empty query string", async () => {
        (request as any).mockImplementation(() => '{"features": []}')
        const result = await Provider.getPlaces("Paris")
        expect(result).toEqual({ features: [] })
    })

    test("An invalid non-json response", async () => {
        (request as any).mockImplementation(() => "Service Unavailable")
        await expect(Provider.getPlaces("Chamonix")).rejects.toThrow(SyntaxError)
    })
})