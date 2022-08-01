from ..domain import Board


class BoardRepository:
    TAKEN_BY_PAGE = 15

    @staticmethod
    def getB(idx: int):
        return Board.select().where(Board.idx == idx)

    @staticmethod
    def getBList(page: int, direction="asc", sortBy="created_At"):
        return (
            Board.select()
            .limit(BoardRepository.TAKEN_BY_PAGE)
            .offset((page - 1) * BoardRepository.TAKEN_BY_PAGE)
            .orderBy(getattr(getattr(Board, sortBy), direction)())
        )

    @staticmethod
    def createB(**post):
        return Board.create(post)

    @staticmethod
    def patchB(idx: int, **opinion):
        query = Board.update(opinion).where(Board.idx == idx)
        return query.execute()

    @staticmethod
    def deleteB(idx: int):
        to_del = Board.get(Board.idx == idx)
        return to_del.delete_instance()
