from flask import Flask, request
app = Flask(__name__)
from ..RemoteServerController.Postgres.Database import get_all_dbs
from ..Exceptions.ServerConnectionError import ServerConnectionError
from .ConvertToJson import convert_database_set_to_json
from flask_cors import CORS
CORS(app)
@app.route('/postgres/databases')
def get_all_databases():
    # username=request.args.get("username")
    # password=request.args.get("password")
    try:
        return convert_database_set_to_json(get_all_dbs("username", "password"))
    except ServerConnectionError as e:
        raise e