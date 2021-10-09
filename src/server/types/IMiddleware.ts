import { Request, Response, NextFunction } from 'express';

export type IMiddleware<T = Request, Rs = Response, Result = unknown> = (
  req: T,
  res: Rs,
  next?: NextFunction,
) => Promise<Result> | void;
