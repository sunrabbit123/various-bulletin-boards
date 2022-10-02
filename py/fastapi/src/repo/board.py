from http.client import HTTPException
from fastapi_sqlalchemy import db
from sqlalchemy import desc, asc

from ..model.database import Board
from ..model.schema import Board as BoardSchema, PartialBoard

sort_by_dict = {"asc": asc, "desc": desc}


class BoardRepository:
    def __init__(self):

        self.con = db.session
        self.PAGE_PER_POST = 15

    
    def get_b(self, idx: int):
        return self.con.query(Board).filter(Board.idx == idx).first()

    
    def get_b_list(self, page: int, direction: str, sort_by: str):
        return (
            self.con.query(Board)
            .order_by(sort_by_dict[direction](getattr(Board, sort_by)))
            .limit(self.PAGE_PER_POST)
            .offset((page - 1) * self.PAGE_PER_POST).all()
        )

    
    def create_b(self, item: BoardSchema):
        post = Board(**item.dict())
        self.con.add(post)
        self.con.commit()
        self.con.refresh(post)
        return post

    
    def patch_b(self, idx: int, item: PartialBoard):
        board = self.con.get(Board, idx)
        if not board:
            raise HTTPException(status_code=404, detail="board is not found")
        for k, v in item.dict(exclude_unset=True).items():
            setattr(board, k, v)
        self.con.add(board)
        self.con.commit()
        self.con.refresh(board)

    
    def delete_b(self, idx: int):
        board = self.con.query(Board).filter(Board.idx == idx).first()
        self.con.delete(board)
        self.con.commit()