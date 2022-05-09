import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { BoardBase, BoardPageQuery } from './DTO/board.dto';
import { AloneBoardResponse, BoardListResponse } from './DTO/http.dto';

@Controller('board')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':idx')
  getBoard(@Param('idx') idx: number): Promise<AloneBoardResponse> {
    return this.appService.getBoard(idx);
  }

  @Get()
  getBoardList(@Query() query: BoardPageQuery): Promise<BoardListResponse> {
    return this.appService.getBoardList(query);
  }

  @Post()
  createBoard(@Body() data: BoardBase): Promise<AloneBoardResponse> {
    return this.appService.createBoard(data);
  }

  @Patch(':idx')
  modifyBoard(
    @Param('idx') idx: number,
    @Body() data: Partial<BoardBase>,
  ): Promise<AloneBoardResponse> {
    return this.appService.modifyBoard(idx, data);
  }

  @Delete(':idx')
  deleteBoard(@Param('idx') idx: number): Promise<AloneBoardResponse> {
    return this.appService.deleteBoard(idx);
  }
}
