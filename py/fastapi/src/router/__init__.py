from fastapi import APIRouter


from .board import board_router

router = APIRouter()


@router.get("/test")
def test():
    return "success for test"


router.include_router(
    board_router,
    prefix="/board",
    tags=["board"],
    responses={404: {"description": "Not found"}},
)

router_list = [{"router": board_router, "prefix": "/board"}]
