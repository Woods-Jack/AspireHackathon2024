interface OutputProps {
  content: string;
}

const Output = ({content}:OutputProps) => {
  return `Hello Output ${content}`
}

export default Output;