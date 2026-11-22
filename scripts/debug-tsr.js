import fs from "fs";
import path from "path";

const files = fs.readdirSync("dist/client/assets");
const js = files.find(f => f.startsWith("index-") && f.endsWith(".js"));
if (!js) {
  console.log("No index-*.js found");
  process.exit(1);
}
const content = fs.readFileSync(path.join("dist/client/assets", js), "utf8");
const target = "$_TSR";
let pos = 0;
while ((pos = content.indexOf(target, pos)) !== -1) {
  console.log("=== Match at " + pos + " ===");
  console.log(content.slice(Math.max(0, pos - 150), pos + 300));
  pos += target.length;
}
