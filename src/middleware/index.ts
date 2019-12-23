import { 
    handleCors, 
    handleBodyRequestParsing, 
    handleCompression
} from "./common"

import { handleAPIDocs } from "./apiDocs"

export default [handleCompression, handleCors, handleBodyRequestParsing, handleAPIDocs]