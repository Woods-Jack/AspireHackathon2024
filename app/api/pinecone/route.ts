import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { initPinecone} from "../../../utils/initPinecone";
import { Document } from "@langchain/core/documents";
import { textSplitter } from "@/langchain/textSplitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// RETURNS THE CURRENT PINECONE INDEX, IF ANY EXIST
export async function GET(req: NextRequest) {
  try{
    const headerList = headers();
    const indexName = headerList.get('indexName');
    console.log('indexName', indexName);
    const pinecone = await initPinecone();
    if(indexName) {
      const index = pinecone.Index(indexName);

      return NextResponse.json({ index: index }, { status: 200 })
    } else {
      throw Error("Index name not provided")
    }
  } catch(error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong'},
      { status: 500 }
    )
  }
}

// Creates a new index within the Pinecone database
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { indexName } = body;
  try {
    const pinecone = await initPinecone();
    let ready = false;
    console.log('Creating new index...')
    await pinecone.createIndex({
      name: 'test-index',
      dimension: 1536,
      metric: 'cosine',
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-west-2',
        }
      }
    });
    while(!ready) {
      const desc = await pinecone.describeIndex(indexName);
      if(desc.status?.ready === true) {
        ready = true
      } else {
        await sleep(3000);
      }
    }
    return NextResponse.json({ message: `Index ${indexName} created successfully`}, { status: 200 })
  } catch(error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong'},
      { status: 500 }
    );
  };
}

// Updates the existing index with new data
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { indexName, namespace, data, metadata } = body;

  const splitDocs = await textSplitter(data, metadata);

  // console.log('DOCS', splitDocs);
  try {
    const pinecone = await initPinecone();
    const embeddings = new OpenAIEmbeddings();
    const pineconeIndex = pinecone.Index(indexName);
    await PineconeStore.fromDocuments(splitDocs, embeddings, {
      pineconeIndex,
      namespace,
      maxConcurrency: 5,
    });
    return NextResponse.json({ message: `Data added to namespace ${namespace} successfully`}, { status: 200 })
  } catch(error: any) {
    return NextResponse.json(
      {error: error.message || "Something went wrong"},
      { status: 500 },
    );
  }
 }

// export async function DELETE(req: NextRequest) {
//   const body = await req.json();
//   const { namespace } = body;
//   try {
//     const pinecone = await initPinecone();
//     const list = await pinecone.listIndexes();
//     const index = pinecone.index(list[0].name);
//     index.namespace(namespace).deleteAll();
//       return NextResponse.json({ message: 'Namespace deleted successfully' }, { status: 200 })
    
//   } catch(error: any) {
//     return NextResponse.json(
//       { error: error.message || 'Something went wrong'},
//       { status: 500 }
//     );
//   };
// }
