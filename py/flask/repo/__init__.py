from configparser import ConfigParser
import pymysql


def get_db_session(config: ConfigParser):
    return pymysql.connect(
        user=config.get("default", "DB_USER"),
        password=config.get("default", "DB_PW"),
        db=config.get("default", "DB_NAME"),
        charset="utf8",
    ).cursor()
