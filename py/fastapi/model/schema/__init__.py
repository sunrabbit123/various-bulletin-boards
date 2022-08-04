from pydantic import BaseModel

class Board(BaseModel):
    title: str
    content: str
    tag: str
