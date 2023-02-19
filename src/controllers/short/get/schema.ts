import {
  FastifyRequest,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteOptions,
} from 'fastify'

export interface getShortRequestParams {
  short: string;
}

export type getShortRequest = FastifyRequest<{ Params: getShortRequestParams }>;

export type getShortRouteOptions = RouteOptions<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  { Params: getShortRequestParams }
>;
