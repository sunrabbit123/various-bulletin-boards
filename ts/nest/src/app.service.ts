import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardBase, BoardPageQuery } from './DTO/board.dto';
import { BoardRepository } from './repository/board';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(BoardRepository) private boardRepo: BoardRepository,
  ) {}
  async getBoard(idx: number) {
    return {
      success: true,
      error: '',
      data: await this.boardRepo.getBoard(idx),
    };
  }

  async getBoardList(query: BoardPageQuery) {
    return {
      success: true,
      error: '',
      data: await this.boardRepo.getBoardList(query),
    };
  }

  async createBoard(data: BoardBase) {
    return {
      success: true,
      error: '',
      data: await this.boardRepo.createBoard(data),
    };
  }

  async modifyBoard(idx: number, data: Partial<BoardBase>) {
    return {
      success: true,
      error: '',
      data: await this.boardRepo.modifyBoard(idx, data),
    };
  }

  async deleteBoard(idx: number) {
    return {
      success: true,
      error: '',
      data: (await this.boardRepo.delete(idx)).affected[0],
    };
  }
}
