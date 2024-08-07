import { createServer } from "node:http";
import Chance from "chance";

export const server = createServer((request, response) => {
  const change = new Chance();
  const name = change.name();
  const age = change.age();
  const profession = change.profession();
  if (request.url === "/") {
    response.statusCode = 200;
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
