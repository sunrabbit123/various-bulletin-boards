import { BoardBase, BoardPageQuery, Board as BoardDTO } from '../DTO/board.dto';
import { Board } from '../entity/board';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  getBoard(idx: number) {
    return this.findOne({ where: { idx } });
  }

  getBoardList(query: BoardPageQuery) {
    return this.find({
      skip: (query.page - 1) * 10,
      order: { createdAt: query.direction },
      take: 10,
    });
  }

  async createBoard(data: BoardBase) {
    return (await this.insert(data)).identifiers[0] as BoardDTO;
  }

  async modifyBoard(idx: number, data: Partial<BoardBase>) {
    return (await this.update(idx, data)).generatedMaps[0] as BoardDTO;
  }
}
