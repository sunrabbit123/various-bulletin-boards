from .controller import Board


class UserService:
    @staticmethod
    def getB(idx: int):
        pass

    @staticmethod
    def get_b_list(page: int, direction: str, sort_by: str):
        pass

    @staticmethod
    def create_b(item: Board):
        pass

    @staticmethod
    def patch_b(idx: int, item: Board):
        pass

    @staticmethod
    def delete_b(idx: int):
        pass
