from .base_model import BaseModel
import peewee
from datetime import datetime


class Board(BaseModel):
    class Meta:
        db_table = "board"

    idx = peewee.IntegerField(
        primary_key=True,
    )
    title = peewee.CharField()
    content = peewee.CharField()
    tag = peewee.CharField()
    created_at = peewee.DateTimeField(default=datetime.now)
