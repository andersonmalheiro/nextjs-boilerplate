import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface GenericObject {
  [key: string]: any;
}

export const useForm = (
  callback: (...args: any[]) => void
): [
  (e: { target: any }) => void,
  (e: FormEvent) => void,
  GenericObject,
  Dispatch<SetStateAction<GenericObject>>
] => {
  const [values, setValues] = useState<GenericObject>({});

  const handleChange = (event: { target: any }) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name || target.id;

    setValues((prevState: GenericObject) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    callback();
  };

  return [handleChange, handleSubmit, values, setValues];
};
