import Markdown from "react-markdown";

interface OutputProps {
  content: string;
}

const Output = ({content}:OutputProps) => {
  return <Markdown>{content}</Markdown>
}

export default Output;