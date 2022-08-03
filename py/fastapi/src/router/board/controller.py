from fastapi import APIRouter
from pydantic import BaseModel

from .service import BoardService

board_router = APIRouter()


class Board(BaseModel):
    title: str
    content: str
    tag: str


@board_router.get("/{idx}", status_code=200)
def get_b(idx: int):
    return BoardService.get_b(idx)


@board_router.get("/", statud_code=200)
def get_b_list(page: int, direction: str = "asc", sort_by: str = "created_at"):
    return BoardService.get_b_list(page, direction, sort_by)


@board_router.post("/", status_code=200)
def create_board(item: Board):
    return BoardService.create_b(item)


@board_router.patch("/{idx}", statud_code=200)
def patch_board(idx: int, title: str = "", content: str = "", tag: str = ""):
    return BoardService.patch_b(idx, {"title": title, "content": content, "tag": tag})


@board_router.delete("/{idx}")
def delete_board(idx: int):
    return BoardService.delete_b(idx)
