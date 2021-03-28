declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HITS_TABLE_NAME: string
            DOWNSTREAM_FUNCTION_NAME: string
        }
    }
}

export {}