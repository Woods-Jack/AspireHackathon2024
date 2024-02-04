import json
import os
from openai import AzureOpenAI
from pytrends.request import TrendReq

client = AzureOpenAI(
    api_key='AZURE_API_KEY',
    api_version='2023-07-01-preview',
    azure_endpoint = 'AZURE_ENDPOINT'
)

def returnMarcelUserData(LLID = None):
    path = os.getcwd()+"/api/static/Data/marcel.json"
    with open(path) as f:
        data = json.load(f)
        try:
            return data[LLID]
        except:
            return {
                "Error":["No marcel data found for user with LLID: "]
            }
            
def returnCareerConversationsUserData(LLID = None):
    path = os.getcwd()+"/api/static/Data/careerConversations.json"
    with open(path) as f:
        data = json.load(f)
        try:
            return data[LLID]
        except:
            return {
                "Error":["No marcel data found for user with LLID: "]
            }
    
    
def extractKeyWords(data = None):
    completion = client.chat.completions.create(model = "AZURE_MODEL_NAME",messages = [{
        "role": "user",
        "content": f"Extract the 5 key words from the following piece of text.The text represents the career goals of an employee for the next quarter. The key words will be used to recommend training material for the employee so be specific about technologies. Return the keyworkds as a comma separated list without numbering them. {data}"
    }])
    #completion = client.completions.create(model = "gen-z-gpt35",prompt = 'what is the capital of afghanistan?')
    return completion.choices[0].message.content


def returnGoogleTrends(term=None):
    pytrends = TrendReq(hl='en-US', tz=360)
    pytrends.build_payload(kw_list=[term], cat=0, timeframe='today 12-m', geo='', gprop='')
    return pytrends.interest_over_time().to_json()
    
    
