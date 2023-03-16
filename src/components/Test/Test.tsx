import {
  Controller,
  Control,
  Noop,
  FieldPathValue,
  RefCallBack,
  FieldValues,
  FieldPath,
  ControllerRenderProps,
} from "react-hook-form";
import { useState, ChangeEvent } from "react";

type Option = {
  value: string;
  label: string;
  checked: boolean;
  id: string;
};

interface RadioProps {
  options: Option[];
}

export const Radio = ({ options }: RadioProps) => {
  const [state, setState] = useState<Option["id"]>(options[0].id);

  return (
    <div>
      {options.map((el) => (
        <label key={el.id}>
          <input
            type="radio"
            value={el.value}
            id={el.id}
            name="group"
            checked={state === el.id}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setState(e.target.id);
            }}
          />
          {el.label}
        </label>
      ))}
    </div>
  );
};

interface TestProps {
  options: Option[];
  control: Control;
}

export const Test = ({ options, control }: TestProps) => {
  return (
    <Controller
      name="select"
      control={control}
      render={({ field }) => <Radio options={options} {...field} />}
    />
  );
};
