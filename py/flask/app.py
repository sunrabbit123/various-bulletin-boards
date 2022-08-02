from flask import Flask, request
from .service import BoardService

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False

@app.route("/board/<int:idx>")
def get_board(idx):
    return BoardService.getB(idx)

@app.route("/board")
def get_board_list():
    return BoardService.getBList()


@app.route("/board")
def create_board():
    return BoardService.createB(request.args)


@app.route("/board/<int:idx>")
def patch_board(idx):
    return BoardService.patchB(idx, request.args)


@app.route("/board/<int:idx>")
def delete_board(idx):
    return BoardService.deleteB(idx)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
