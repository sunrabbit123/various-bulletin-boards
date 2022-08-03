from crypt import methods
from flask import Flask, request
from .service import BoardService

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False

@app.route("/board/<int:idx>", methods=["GET", "PATCH", "DELETE"])
def board_with_idx(idx):
    return {
        "GET" : BoardService.getB(idx),
        "PATCH" : BoardService.patchB(idx, request.args),
        "DELETE" : BoardService.deleteB(idx)
    }[request.method]

@app.route("/board", methods=["GET", "POST"])
def get_board_list():
    return {
        "GET" : BoardService.getBList,
        "POST" : BoardService.createB
    }[request.method](request.args)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
