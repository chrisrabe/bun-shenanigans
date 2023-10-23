import { FastifyPluginCallback } from "fastify";
import v1Routes from "./v1";

const apiRouter: FastifyPluginCallback = (fastify, _, done) => {
  fastify.register(v1Routes, {prefix: '/v1'});
  done();
};

export default apiRouter;
