import { Request, Response } from "express";
import * as BoardRepo from "../../repository";

const createResBody: Function = (data: Object) => ({
  success: true,
  error: "",
  data,
});

const creeateErrorRes: Function = (error: string) => ({
  success: false,
  error,
});

export const getB = async (req: Request, res: Response) => {
  if (typeof req.params.idx === "number") {
    res.json(createResBody(await BoardRepo.getB(req.params.idx)));
  } else {
    res.json(creeateErrorRes("idx가 숫자가 아닙니다."));
  }
};

export const getBList = async (req: Request, res: Response) => {
  res.json(createResBody(await BoardRepo.getBList(req.query)));
};
export const createB = async (req: Request, res: Response) => {
  res.json(createResBody(await BoardRepo.insertB(req.body)));
};
export const patchB = async (req: Request, res: Response) => {
  res.json(createResBody(await BoardRepo.patchB(req.body)));
};
export const deleteB = async (req: Request, res: Response) => {
  if (typeof req.params.idx === "number") {
    res.json(createResBody(await BoardRepo.deleteB(req.params.idx)));
  } else {
    res.json(creeateErrorRes("idx가 숫자가 아닙니다."));
  }
};
