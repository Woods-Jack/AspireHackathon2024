import { LearningPath } from "@/components/LearningPath/LearningPath";
import { data } from "@/components/LearningPath/data";

const yourPath = () => {
  return(
    <>
      <LearningPath content={data} tldr={'This is helping your speed capabilities.'} learners={[{name: 'Alice'},{name: 'Ravi'},{name: 'Jack'}]}/>
    </>
    
  )
}

export default yourPath;