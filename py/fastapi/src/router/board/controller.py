from fastapi import APIRouter

from .service import BoardService
from src.model import BoardSchema, PartialBoard

board_router = APIRouter()

@board_router.get("/", status_code=200)
def get_b_list(page: int, direction: str = "desc", sort_by: str = "createdAt"):
    return BoardService.get_b_list(page, direction, sort_by)


@board_router.get("/{idx}", status_code=200)
def get_b(idx: int):
    return BoardService.get_b(idx)



@board_router.post("/", status_code=200)
def create_board(item: BoardSchema):
    return BoardService.create_b(item)


@board_router.patch("/{idx}", status_code=200)
def patch_board(idx: int, item: PartialBoard):
    return BoardService.patch_b(idx, item)


@board_router.delete("/{idx}")
def delete_board(idx: int):
    return BoardService.delete_b(idx)
