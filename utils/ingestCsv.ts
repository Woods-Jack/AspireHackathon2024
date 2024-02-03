import 'dotenv/config';
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { MetadataArray } from "@/langchain/textSplitter";
import { textSplitter } from '@/langchain/textSplitter';
import { initPinecone } from './initPinecone';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Document } from "@langchain/core/documents";

const filePath = 'docs';

const addPineconeData = async(data:Document[], indexName: string) => {
  const splitDocs = await textSplitter(data);
 
    const pinecone = await initPinecone();
    const embeddings = new OpenAIEmbeddings();
    const pineconeIndex = pinecone.Index(indexName);
    await PineconeStore.fromDocuments(splitDocs, embeddings, {
      pineconeIndex,
      maxConcurrency: 10,
    });
    return `Data added to namespace ${indexName} successfully`

}

export const run = async () => {
  try{
    const loader = new DirectoryLoader(filePath, {
      '.csv': (path) => new CSVLoader(path),
    });

    const rawDocs = await loader.load();
    const index = 'courses';

    const output = await addPineconeData(rawDocs, index)
    console.log(output)
  } catch(error) {
    console.log('Error while ingesting data:', error)
  }
}

(async () => {
  await run();
  console.log('Ingestion complete');
})();
