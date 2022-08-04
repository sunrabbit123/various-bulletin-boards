from sqlalchemy import Column, Integer, String, DateTime, Text

from datetime import datetime
from pytz import timezone

from .base import Base

class Board(Base):
    __tablename__ = "board"

    idx = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(32))
    content = Column(Text, nullable=False)
    tag = Column(Text, nullable=False)
    created_at = Column(DateTime(), default=datetime.now(timezone("Asia/Seolu")))

    def __init__(self, title : str, content : str, tag : str):
        self.title = title
        self.content = content
        self.tag = tag
        
