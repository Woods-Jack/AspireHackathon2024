import {Pinecone} from "@pinecone-database/pinecone"

export async function initPinecone() {
  try{
    return new Pinecone();
  } catch(error) {
    throw new Error(`Failed to initialise pinecone client ${error}`);
  }
};