// @ts-nocheck TS bitching about "missing" functions in fastify

import { FastifyPluginCallback } from "fastify";
import getCatFacts from "./handlers/getCatFacts";

const catFactsRouter: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get('/', getCatFacts);
  done();
}

export default catFactsRouter;