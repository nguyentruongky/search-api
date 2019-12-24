import { Router } from "Framework"
import swaggerUi from "swagger-ui-express"
import 'module-alias/register'
//import swaggerDocument from "@config/swagger"
import swaggerDocument from "../config/swagger.json"

export const handleAPIDocs = (router: Router) => {
    router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}