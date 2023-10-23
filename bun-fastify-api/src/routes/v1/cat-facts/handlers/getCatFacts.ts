import { FastifyReply, FastifyRequest } from "fastify";
import { catsApi, boredApi } from "@/services/index";

const getCatFacts = async (request: FastifyRequest, reply: FastifyReply) => {
  const { data: catFact } = await catsApi.get('/fact');
  const { data: activity } = await boredApi.get('/activity');

  return reply.code(200).send({
    catFact,
    activity
  });
};

export default getCatFacts;
