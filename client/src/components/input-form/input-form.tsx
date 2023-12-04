import React from "react";
import { Input, StyledForm } from "./input-form.styles";


interface InputFormProps {
  country: string;
  name: string;
  setCountry: (value: string) => void;
  setName: (value: string) => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  country,
  name,
  setCountry,
  setName,
}) => {
  return (
    <StyledForm>
      <label>Страна:</label>
      <Input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <label>Имя:</label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </StyledForm>
  );
};


