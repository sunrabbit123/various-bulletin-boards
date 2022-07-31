from flask import Flask

from configparser import ConfigParser

config = ConfigParser()
config.read("../config.ini")

from .repo import get_db_session

db_session = get_db_session(config)

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False


def generate_response(data, code: str = "DP000", status: str = "success"):
    return {"status": status, "code": code, "data": data}


@app.route("/board/:idx")
def get_board():
    return generate_response()


@app.route("/board")
def get_board_list():
    return generate_response()


@app.route("/board")
def create_board():
    return generate_response()


@app.route("/board/:idx")
def patch_board():
    return generate_response()


@app.route("/board/:idx")
def delete_board():
    return generate_response()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
