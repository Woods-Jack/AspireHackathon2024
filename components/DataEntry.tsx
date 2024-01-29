import React, {useState} from 'react';
import { MetadataArray } from "@/langchain/textSplitter";

interface DataEntryProps {
  addDataCb: (data: string, metadata: MetadataArray, namespace: string) => void
}

const DataEntry = ({addDataCb}: DataEntryProps) => {

  const [data, setData] = useState<string>('');
  const [namespace, setNamespace] = useState<string>('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    let metadata = [{country: `${namespace}`}];
    addDataCb(data, metadata, namespace);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Data to be added:
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          rows={5}
          cols={40}
        />
      </label>

      <br />

      <label>
        Namespace:
        <input
          type='text'
          value={namespace}
          onChange={(e) => setNamespace(e.target.value)}
        />
      </label>

      <br />

      <button type='submit'>Submit</button>

    </form>
  )
}

export default DataEntry;