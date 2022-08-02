def generate_response(data, code: str = "DP000", status: str = "success"):
    return {"status": status, "code": code, "data": data}
