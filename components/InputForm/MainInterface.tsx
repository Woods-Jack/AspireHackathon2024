"use client"

import React, {useState} from 'react';
import InputForm from "./InputForm";
import { LearningPath } from '../LearningPath/LearningPath';
import { buildUserData } from '@/utils/buildUserData';
import  DataEntry from "./DataEntry";
import { UserInputProps } from "./InputForm.types";
import { MetadataArray } from '@/langchain/textSplitter';
import { getLearningPathChain } from '@/langchain/getLearningPathChain';

const MainInterface = () => {
  const [learningPlan, setLearningPlan] = useState<any>({});
  const [speedTLDR, setSpeedTLDR] = useState<string>('');

  const getLearningPlan = async() => {
    try {
      const indexName = 'courses';
      const getChain = 'getLearningPathChain';
      const input = buildUserData('AI');

      if (indexName) {
        const response = await fetch('/api/azure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            getChain,
            indexName,
            input
          }),
        });
        const plan = await response.json();
        setLearningPlan(plan);
        return plan;
      } else {
        console.log('No indexes found, please create an index')
      }

  
    } catch(error: any) {
      console.log('Error', error)
    }
  }

  const getSpeedTLDR = async (descriptions: string) => {
    try {
      const indexName = 'courses';
      const getChain = 'getSpeedTLDRChain';
      const input = descriptions;

      if (indexName) {
        const response = await fetch('/api/azure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            getChain,
            indexName,
            input
          }),
        });

        const res = await response.json();
        const tldr = res.kwargs.content;
        console.log('speedTLDR',tldr)
        setSpeedTLDR(tldr)

      } else {
      console.log('No indexes found, please create an index')
      } 
    } catch(error: any) {
      console.log('Error', error)
    }
  }

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
  const generateLearningPlan = async () => {
    const learningPlan = await getLearningPlan();
    const descriptions = learningPlan.learningPath.map((course: any) => course.description).join(' ');
    await getSpeedTLDR(descriptions);
   
  }

  return(
    <div>
      <div>
        <InputForm inputSubmitCb={generateLearningPlan} />
      </div>
    <LearningPath tldr={speedTLDR} content={learningPlan} />
    </div>
  )
}

export default MainInterface;