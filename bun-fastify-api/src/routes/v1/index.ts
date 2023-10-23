import { FastifyPluginCallback } from "fastify";
import catFactsRouter from "./cat-facts";

const v1Routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.register(catFactsRouter, { prefix: '/cat-facts' });
  done();
}

export default v1Routes;
