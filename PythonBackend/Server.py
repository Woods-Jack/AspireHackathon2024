from flask import Flask
from flask import request
from flask import render_template
from Utils import index_stats
import json

app = Flask(__name__)

@app.route("/")
def index():
    return "Index page changing "

@app.route("/template/")
@app.route("/template/<name>")
def template(name = None):
    return render_template('welcome.html', name = name)

@app.route("/index")
def get_index():
    return index_stats()

@app.route("/api/search", methods=["POST", "GET"])
def search():
    if request.method == "POST":
        return request.data
        # return query_pinecone(request.form.question)
    if request.method == "GET":
        return "GET"
        # return query_pinecone(request.args.get("question", ""))
    return "Only GET and POST methods are allowed for this endpoint"

