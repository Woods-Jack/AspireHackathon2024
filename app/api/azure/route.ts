import { NextRequest, NextResponse } from "next/server";
import { RunnableSequence } from "@langchain/core/runnables";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { getLearningPathChain } from "@/langchain/getLearningPathChain";
import { initPinecone } from "@/utils/initPinecone";
import { buildUserData } from "@/utils/buildUserData";

interface AzureProps {
  getChain: string;
  indexName: string
}

const functionMap = {
  getLearningPathChain
}

export async function POST(req: NextRequest) {
 
  const body = await req.json();
  const { getChain, indexName }: AzureProps = body;
  console.log('body',body);

  const userQuestion = buildUserData()
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
      const result = await chain.invoke(userQuestion);
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