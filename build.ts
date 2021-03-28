import path from "path"
import fs from "fs"

const overwriteCdkJsonInDist = () => {
    const cdkJsonPathInSrc = path.resolve(__dirname, "./src/cdk.json")
    const cdkJsonInDist = fs.readFileSync(cdkJsonPathInSrc)
    const json = JSON.parse(cdkJsonInDist.toString("utf-8"))
    json.app = json.app.replace(/npx\s+ts-node\s+(\D.+\s)+/, "node ")
    json.app = json.app.replace(".ts", ".js")
    const cdkJsonPathInDist = path.resolve(__dirname, "./dist/cdk.json")
    fs.writeFileSync(cdkJsonPathInDist, JSON.stringify(json))
}

overwriteCdkJsonInDist()