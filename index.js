require("isomorphic-unfetch");

const { promises: fs} = require("fs");
const path = require("path");

// sync things from "README.template.md" to "READEME.me"
async function main(){
  
  // read the path and encode with utf-8
  const readmeTemplate = (
    await fs.readFile(path.join(process.cwd(), "./README.template.md"))
  ).toString("utf-8");

  // generate "README.md" file by replacing the content from "README.template.md"
  await fs.writeFile("README.md", readmeTemplate);
}

// run the main func
main();