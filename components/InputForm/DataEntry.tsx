import React, { useState } from "react";
import { MetadataArray } from "@/langchain/textSplitter";
import { Textarea, Input, Text, HStack, Button } from "@chakra-ui/react";

interface DataEntryProps {
  addDataCb: (data: string, metadata: MetadataArray, namespace: string) => void;
}

const DataEntry = ({ addDataCb }: DataEntryProps) => {
  const [data, setData] = useState<string>("");
  const [namespace, setNamespace] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let metadata = [{ country: `${namespace}` }];
    addDataCb(data, metadata, namespace);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Text mb="8px"> Data to be added:</Text>
        <Textarea value={data} onChange={(e) => setData(e.target.value)} />
      </HStack>
      <br />
      <HStack>
        <Text mb="8px">Namespace:</Text>
        <Input
          type="text"
          value={namespace}
          onChange={(e) => setNamespace(e.target.value)}
        />
      </HStack>
      <br />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default DataEntry;
