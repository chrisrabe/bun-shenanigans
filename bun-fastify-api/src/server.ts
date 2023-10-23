import { config } from "dotenv";
import build from "./api";

config(); // load .env file

const { PORT } = process.env;

build().then(app => {
  app.listen({ port: PORT ? parseInt(PORT) : 8080 }, (err, address) => {
    if (err) {
      console.error("There was an error starting server.");
      process.exit(1)
    }
    console.log(`Server is listening on ${address}`)
  })
});