export type Direction = 'ASC' | 'DESC';
export type SortBy = 'createdat';

export interface BoardPageQuery {
  page: number;
  direction: Direction;
  sortby: SortBy;
}

export interface BoardBase {
  title: string;
  content: string;
  tag: string;
}

export interface Board extends BoardBase {
  idx: number;
}
