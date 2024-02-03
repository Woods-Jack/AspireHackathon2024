"use client"

import React, {useState} from 'react';
import InputForm from "./InputForm";
import { LearningPath } from '../LearningPath/LearningPath';
import  DataEntry from "./DataEntry";
import { UserInputProps } from "./InputForm.types";
import { MetadataArray } from '@/langchain/textSplitter';
import { getLearningPathChain } from '@/langchain/getLearningPathChain';

const MainInterface = () => {
  const [history, setHistory] = useState<[string, string][]>([]);
  const [output, setOutput] = useState<any>({});

  const getLearningPlan = async(input: UserInputProps) => {
    try {
      const indexName = 'courses';
      const getChain = 'getLearningPathChain';
      
      if (indexName) {
        const response = await fetch('/api/azure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            getChain,
            indexName,
          }),
        });
        const itinerary = await response.json();

        setOutput(itinerary);
        console.log('OUT', output)
      } else {
        console.log('No indexes found, please create an index')
      }
  
    } catch(error: any) {
      console.log('Error', error)
    }
  }

  // const getSpeedTLDR = async (descriptions: string) => {
  //   try {
  //     const indexName = 'courses';
  //     if (indexName) {
  //       const response = await fetch('/api/azure', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           userInput: input,
  //           history,
  //           indexName,
  //         }),
  //       });
  //       const itinerary = await response.json();
  //   } catch(error: any) {
  //     console.log('Error', error)
  //   }
  // }

  // const addPineconeData = async(data: string, metadata: MetadataArray, namespace: string) => {
  //   try{
  //     const indexName = 'test-index';
  //     if (indexName) {
  //       const response = await fetch('/api/pinecone', {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           indexName,
  //           namespace,
  //           data,
  //           metadata,
  //         }),
  //       });
  //     } else {
  //       console.log('No indexes found, please create an index')
  //     }
  //   } catch(error: any) {
  //     console.log('Error', error)
  //   }
  // }

  return(
    <div>
      <div>
        <InputForm inputSubmitCb={getLearningPlan} />
      </div>
    <LearningPath content={output} />
    </div>
  )
}

export default MainInterface;