import { LearningPath } from "@/components/LearningPath/LearningPath";
import { data } from "@/components/LearningPath/data";
import peopleData from "../../data/dummy-users-2.json";

const YourLearningPath = () => {
  return(
    <>
      <LearningPath content={data} tldr={'This is helping your speed capabilities.'} learners={peopleData.people}/>
    </>
    
  )
}

export default YourLearningPath;