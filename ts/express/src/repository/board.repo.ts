import POOL from "../util/db.connect";

interface BoardBase {
  title: string;
  content: string;
  tag: string;
}

const PAGE_TAKEN = 15;
const { QUERY, VALUES, SET } = POOL;

export const getB: Function = (idx: number) =>
  QUERY`SELECT * FROM board WHERE idx = ${idx}`;

export const getBList: Function = ({
  page = 1,
  orderBy = "desc",
  sortBy = "createdAt",
}: {
  page: number;
  orderBy: "asc" | "desc";
  sortBy: "createdAt";
}) =>
  QUERY`SELECT * FROM board ORDER BY ${sortBy} ${orderBy} LIMIT ${
    (page - 1) * PAGE_TAKEN
  }, ${PAGE_TAKEN}`;

export const insertB: Function = (data: BoardBase) => QUERY`
  INSERT INTO board ${VALUES(data)}
`;

export const patchB: Function = (idx: number, data: Partial<BoardBase>) =>
  QUERY`UPDATE board ${SET(data)} WHERE idx = ${idx}`;

export const deleteB: Function = (idx: number) =>
  QUERY`DELETE FROM board WHERE idx = ${idx}`;
