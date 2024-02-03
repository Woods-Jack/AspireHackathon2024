import { NextRequest, NextResponse } from "next/server";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { getLearningPathChain } from "@/langchain/getLearningPathChain";
import { getSpeedTLDRChain } from "@/langchain/getSpeedTLDRChain";
import { initPinecone } from "@/utils/initPinecone";

interface AzureProps {
  getChain: string;
  indexName: string;
  input: string;
}

const functionMap = {
  getLearningPathChain,
  getSpeedTLDRChain,
}

export async function POST(req: NextRequest) {
 
  const body = await req.json();
  const { getChain, indexName, input }: AzureProps = body;
  console.log('body',body);

  console.log('formattedQ', getChain);
    try {
      const pinecone = await initPinecone();
      const pineconeIndex = pinecone.Index(indexName);
      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex }
      );

      const chain = functionMap[getChain](vectorStore);
    
      //console.log('CHAT HISTORY', itineraryChain)
      console.log("About to invoke");
      console.log('INPUT', input);
      const result = await chain.invoke(input);
      console.log("After invoke")
    

      return NextResponse.json(result, {
        status: 200,
      });
    } catch(error: any) {
      console.log('error', error)
      return NextResponse.json(
        { error: error.message || "Something went wrong" },
        { status: 500, }
      )
    }
 

}