import fastify from "fastify";
import apiRouter from "./routes";

const build = async () => {
  const api = fastify({
    logger: true
  });


  api.register(apiRouter, {prefix: '/api'});

  return api;
};

export default build;