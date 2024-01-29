import { NextRequest, NextResponse } from "next/server";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { getItineraryChain } from "@/langchain/getItineraryChain";
import { initPinecone } from "@/utils/initPinecone";

interface ChatProps {
  userInput: {
    preferences: string;
    budget: string;
    lengthOfStay: string;
  }
  history: []
  indexName: string
}

export async function POST(req: NextRequest) {
 
  const body = await req.json();
  const { userInput, history, indexName }: ChatProps = body;
  console.log('body',body);
  const { preferences, budget, lengthOfStay } = userInput || {};  
  const userQuestion = `I want to build an itinerary for my trip of ${lengthOfStay} days. My budget is ${budget} and my interests are the following: ${preferences}`
  console.log('formattedQ', userQuestion);
    try {
      const pinecone = await initPinecone();
      const pineconeIndex = pinecone.Index(indexName);
      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex }
      );

      const itineraryChain = getItineraryChain(vectorStore);

      const pastMessages = history.map((message: string, i: number) => {
        if (i % 2 === 0) {
          return new HumanMessage(message);
        } else {
          return new AIMessage(message);
        }
      });
    
      //console.log('CHAT HISTORY', itineraryChain)
      console.log("About to invoke");
      const itinerary = await itineraryChain.invoke(userQuestion);
      console.log("After invoke")
      console.log('response:', itinerary);

      return NextResponse.json(itinerary, {
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