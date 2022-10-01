import { PrismaClient } from "@prisma/client";

interface BoardBase {
  title: string;
  content: string;
  tag: string;
}
const PAGE_TAKEN = 15;
const prisma: PrismaClient = new PrismaClient();

export const getB: Function = async (idx: number) =>
  prisma.board.findFirst({ where: { idx } });

export const getBList: Function = async ({
  page = 1,
  direction = "desc",
  sortBy = "createdAt",
}: {
  page: number;
  direction: "asc" | "desc";
  sortBy: "createdAt";
}) =>
  prisma.board.findMany({
    take: PAGE_TAKEN,
    orderBy: { [sortBy]: direction },
    skip: (page - 1) * PAGE_TAKEN,
  });

export const insertB: Function = async (data: BoardBase) =>
  prisma.board.create({ data });

export const patchB: Function = async (idx: number, data: Partial<BoardBase>) =>
  prisma.board.update({ data, where: { idx } });

export const deleteB: Function = async (idx: number) =>
  prisma.board.delete({ where: { idx } });
