from optparse import Option
from typing import Optional
from pydantic import BaseModel


class Board(BaseModel):
    title: str
    content: str
    tag: str

class PartialBoard(Board):
    title : Optional[str]
    content : Optional[str]
    tag : Optional[str]