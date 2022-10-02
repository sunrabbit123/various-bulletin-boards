import configparser

config = configparser.ConfigParser()
config.read("config.ini")

from fastapi import FastAPI

app = FastAPI()


def set_middleware(app: FastAPI):
    from .middleware import DBSession
    app.add_middleware(DBSession, db_url=config.get("default", "DB_URL"))
    
    from fastapi.middleware.cors import CORSMiddleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],  # TODO 추후 정확히 메서드 입력
        allow_headers=["*"],
    )
    
set_middleware(app)
def set_router(app: FastAPI):
        
    from .router import router_list
    for information in router_list:
        app.include_router(
            information["router"],
            prefix=information["prefix"],
            responses={404: {"description": "Not found"}},
        )

set_router(app)
