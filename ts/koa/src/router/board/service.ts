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
  if (Number.isInteger(Number(ctx.params.idx))) {
    ctx.body = createResBody(await BoardRepo.getB(Number(ctx.params.idx)));
  } else {
    ctx.body = creeateErrorRes("idx가 숫자가 아닙니다.");
  }
};

export const getBList = async (ctx: Context) => {
  ctx.body = createResBody(
    await BoardRepo.getBList({
      page: 1,
      sortBy: "createdAt",
      orderBy: "desc",
      ...ctx.request.query,
    }),
  );
  //TODO ctx.request.query 안에 있는 인자값들 유효성 검사
};

export const createB = async (ctx: Context) => {
  ctx.body = createResBody(await BoardRepo.insertB((ctx.request as any).body));
};

export const patchB = async (ctx: Context) => {
  if (Number.isInteger(Number(ctx.params.idx))) {
    ctx.body = createResBody(
      await BoardRepo.patchB(Number(ctx.params.idx), (ctx.request as any).body),
    );
  } else {
    ctx.body = creeateErrorRes("idx가 숫자가 아닙니다.");
  }
};

export const deleteB = async (ctx: Context) => {
  if (Number.isInteger(Number(ctx.params.idx))) {
    ctx.body = createResBody(await BoardRepo.deleteB(Number(ctx.params.idx)));
  } else {
    ctx.body = creeateErrorRes("idx가 숫자가 아닙니다.");
  }
};
