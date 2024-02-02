from dotenv import load_dotenv
from pinecone import Pinecone

load_dotenv()

pc = Pinecone()
index = pc.Index('test-index')

def index_stats():
    return index.describe_index_stats().to_str()

def upsert(data = None):
    index.upsert(data)
    
def retrieve():
    return index.query()