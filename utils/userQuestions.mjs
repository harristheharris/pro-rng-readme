// TODO: Create an array of questions for user input

const questions = [
{
    type: "input",
    message: "What is the project title:",
    name: "title"
},
{
    type: "input",
    message: "Provide a short description  explaining the what, why, and how of this project. Keep in the mind the following: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
    name: "description"
},
{
    type: "input",
    message: "What are the steps required to install this project?:",
    name: "installation"
},
{
    type:"input",
    message: "Provide instructions and examples for use. Add screenshots if necessary NOTE: images are not supported and will need to be manually added to the README after generation:",
    name: "usage"
},
{
    type: "input",
    message: "List colloborators, if any, along with links to their GitHub profiles. If third party assets were used list them here as well:",
    name: "credits"
},
{
    type: "list",
    message: "What license did you use:",
    name: "license",
    choices: ["MIT", "ISC", "No License"]
},
{
    type: "input",
    message:"Where can you be contacted?:",
    name: "contact"
}


];


export default questions