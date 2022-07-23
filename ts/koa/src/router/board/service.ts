import { Context } from "koa";

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
export const getB = async (ctx: Context) => {
  if (typeof ctx.params.idx === "number") {
    ctx.body = createResBody(await BoardRepo.getB(ctx.params.idx));
  } else {
    ctx.body = creeateErrorRes("idx가 숫자가 아닙니다.");
  }
};

export const getBList = async (ctx: Context) => {
  ctx.body = createResBody(await BoardRepo.getBList(ctx.request.query));
  //TODO ctx.request.query 안에 있는 인자값들 유효성 검사
};

export const createBList = async (ctx: Context) => {
  ctx.body = createResBody(await BoardRepo.insertB((ctx.request as any).body));
};

export const patchB = async (ctx: Context) => {
  ctx.body = createResBody(await BoardRepo.patchB((ctx.request as any).body));
};

export const deleteB = async (ctx: Context) => {
  if (typeof ctx.params.idx === "number") {
    ctx.body = createResBody(await BoardRepo.deleteB(ctx.params.idx));
  } else {
    ctx.body = creeateErrorRes("idx가 숫자가 아닙니다.");
  }
};
