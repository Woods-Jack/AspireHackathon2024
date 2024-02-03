import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export type MetadataArray = {
  [key: string]:any
}

export const textSplitter = async(data:Document<Record<string, any>>[]) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 0,
  });

  const output = await splitter.splitDocuments(data);

  return output;
} 