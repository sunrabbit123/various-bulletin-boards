from configparser import ConfigParser
import peewee


def get_db(config: ConfigParser):
    return peewee.MySQLDatabase(
        user=config.get("default", "DB_USER"),
        password=config.get("default", "DB_PW"),
        db=config.get("default", "DB_NAME"),
        charset="utf8",
    )


config = ConfigParser()
config.read("../config.ini")

mysql_db = get_db(config)
print("DB Connect" if mysql_db.connect() else "DB Connect faild")


class BaseModel(peewee.Model):
    class Meta:
        database = mysql_db
