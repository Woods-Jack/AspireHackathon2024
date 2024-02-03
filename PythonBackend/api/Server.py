from flask import Flask
from flask import request
from flask import render_template
from flask import Response
from api.Utils import returnMarcelUserData,returnCareerConversationsUserData

app = Flask(__name__)

@app.route("/")
def index():
    return "testing changes" #render_template('image_render.html', image=file)

@app.route("/template/")
@app.route("/template/<name>")
def template(name = None):
    return render_template('welcome.html', name = name)

@app.route("/api/search", methods=["POST", "GET"])
def search():
    if request.method == "POST":
        return request.data
        # return query_pinecone(request.form.question)
    if request.method == "GET":
        return "GET"
        # return query_pinecone(request.args.get("question", ""))
    return "Only GET and POST methods are allowed for this endpoint"

@app.route("/api/user_marcel_data/<LLID>",methods=["GET"])
def getMarcelUserData(LLID=None):
    body = returnMarcelUserData(LLID)
    if "Error" in body:
        return Response(f"Error: No resources found for user with LLID : {LLID}",status = 404)
    return body

@app.route("/api/user_themes/<LLID>",methods=["GET"])
def getUserThemes(LLID = None):
    body = returnCareerConversationsUserData(LLID)
    if "Error" in body:
       return Response(f"Error: No resources found for user with LLID : {LLID}",status = 404)
    
    y = 0;
    for year in body:
        if (int(year) > y):
            y = int(year)
    current_year_catchups = body[str(y)]
    
    catchup_text = ""
    for quarter in current_year_catchups:
        catchup_text+= current_year_catchups[quarter]
    
    return catchup_text 
    