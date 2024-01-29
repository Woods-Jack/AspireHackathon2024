"use client"

import React, {useState} from 'react';
import InputForm from "./InputForm";
import Output from "./Output";
import  DataEntry from "./DataEntry";
import { UserInputProps } from "./InputForm.types";
import { MetadataArray } from '@/langchain/textSplitter';

const MainInterface = () => {
  const [history, setHistory] = useState<[string, string][]>([]);
  const [output, setOutput] = useState<string>('');

  const getItinerary = async(input: UserInputProps) => {
    try {
      console.log('input', input);
      const indexName = 'test-index';
      if (indexName) {
        const response = await fetch('/api/azure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userInput: input,
            history,
            indexName,
          }),
        });
        const itinerary = await response.json();
        setOutput(itinerary);
      } else {
        console.log('No indexes found, please create an index')
      }
  
    } catch(error: any) {
      console.log('Error', error)
    }
  }

  const addPineconeData = async(data: string, metadata: MetadataArray, namespace: string) => {
    try{
      const indexName = 'test-index';
      if (indexName) {
        const response = await fetch('/api/pinecone', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            indexName,
            namespace,
            data,
            metadata,
          }),
        });
      } else {
        console.log('No indexes found, please create an index')
      }
    } catch(error: any) {
      console.log('Error', error)
    }
  }

  return(
    <>
    <InputForm inputSubmitCb={getItinerary} />
    <Output content={output}/>
    <DataEntry addDataCb={addPineconeData} />
    </>
  )
}

export default MainInterface;