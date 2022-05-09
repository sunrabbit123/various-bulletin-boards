import { Board } from './board.dto';

export interface Response<Data> {
  success: boolean;
  error?: string;
  data: Data;
}

export type AloneBoardResponse = Response<Board>;
export type BoardListResponse = Response<Board[]>;
