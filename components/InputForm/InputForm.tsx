"use client";

import React, { useState } from "react";
import { UserInputProps } from "./InputForm.types";
import { Button, HStack, Input, Select, Text } from "@chakra-ui/react";

interface InputFormProps {
  inputSubmitCb: (input: UserInputProps) => void;
}

const InputForm = ({ inputSubmitCb }: InputFormProps) => {
  // State variables to store user inputs
  const [preferences, setPreferences] = useState("");
  const [lengthOfStay, setLengthOfStay] = useState("");
  const [budget, setBudget] = useState("");

  // Handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userInput = {
      preferences: preferences,
      lengthOfStay: lengthOfStay,
      budget: budget,
    };

    inputSubmitCb(userInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Preferences input */}
        <HStack>
          <Text mb="8px">Preferences:</Text>
          <Input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="Enter preferences separated by commas"
          />
        </HStack>
        <br />
        {/* Length of stay input */}
        <HStack>
          <Text mb="8px">Length of stay:</Text>
          <Input
            type="number"
            value={lengthOfStay}
            onChange={(e) => setLengthOfStay(e.target.value)}
            placeholder="Enter the number of days"
          />
        </HStack>
        <br />
        {/* Budget input */}
        <HStack>
          <Text>Budget: </Text>
          <Select
            placeholder="Select budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </HStack>
        <br />
        <Button type="submit">Submit</Button>{" "}
      </form>
    </div>
  );
};

export default InputForm;
