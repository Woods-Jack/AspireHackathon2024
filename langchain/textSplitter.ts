import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export type MetadataArray = {
  [key: string]:any
}

export const textSplitter = async(data:string, metadataArr:MetadataArray) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const output = await splitter.splitDocuments([
    new Document({ 
      pageContent: data,
      metadata: metadataArr.reduce((acc:string, metadata:string) => {
        Object.assign(acc,metadata);
        return acc;
      }, {}),
    })
  ]);

  return output;
} 