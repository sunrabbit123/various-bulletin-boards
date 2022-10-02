from src.model import BoardSchema, PartialBoard
from src.repo import BoardRepository


class BoardService:
    @staticmethod
    def get_b(idx: int):
        return BoardRepository().get_b(idx)

    @staticmethod
    def get_b_list(page: int = 1, direction: str = "desc", sort_by: str = "createdAt"):
        return BoardRepository().get_b_list(page, direction, sort_by)

    @staticmethod
    def create_b(item: BoardSchema):
        return BoardRepository().create_b(item)

    @staticmethod
    def patch_b(idx: int, item: PartialBoard):
        return BoardRepository().patch_b(idx, item)

    @staticmethod
    def delete_b(idx: int):
        return BoardRepository().delete_b(idx)
