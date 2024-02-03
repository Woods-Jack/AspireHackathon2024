import json
import os

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
    
    
# def extractKeyWords(data = None):
#     nlp = spacy.load("en_core_web_sm")
#     doc = nlp(data.lower())
    
#     noun_phrases = [chunk.text for chunk in doc.noun_chunks]
    
#     vectorizer = TfidfVectorizer()
#     tfidf = vectorizer.fit_transform(noun_phrases)
    
#     top_phrases = sorted(vectorizer.vocabulary_, key=lambda x: tfidf[0, vectorizer.vocabulary_[x]], reverse=True)[:3] 
#     return top_phrases

    
    