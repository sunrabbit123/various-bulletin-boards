from .util import generate_response
from ..repo import BoardRepository


class BoardService:
    @staticmethod
    def getB(idx: int):
        return generate_response(BoardRepository.getB(idx))

    @staticmethod
    def getBList(page: int, direction="asc", sortBy="created_at"):
        return generate_response(BoardRepository.getBList(page, direction, sortBy))

    @staticmethod
    def createB(**post):
        return generate_response(BoardRepository.createB(post))

    @staticmethod
    def patchB(idx: int, **opinion):
        return generate_response(BoardRepository.patchB(idx, opinion))

    @staticmethod
    def deleteB(idx: int):
        return generate_response(BoardRepository.deleteB(idx))
