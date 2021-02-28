import React from 'react';
import {
  StyledFieldSet,
  StyledLabel,
  StyledInput,
  StyledSelect,
} from './inputs.styles';

interface InputProps {
  id: string;
  'data-testid'?: string;
  label: string;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  type: string;
  onChange?: (...args: any[]) => void;
}

interface SelectProps {
  id: string;
  'data-testid'?: string;
  label: string;
  name: string;
  options: any[];
  labelKey: string;
  valueKey: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: (...args: any[]) => void;
}

export const Input = (props: InputProps) => {
  const { id, label, type, value, ...rest } = props;

  return (
    <StyledFieldSet>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        type={type ? type : 'text'}
        value={value || ''}
        {...rest}
      />
    </StyledFieldSet>
  );
};

export const Select = (props: SelectProps) => {
  const {
    id,
    label,
    options,
    labelKey,
    placeholder,
    valueKey,
    value,
    ...rest
  } = props;

  return (
    <StyledFieldSet>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect id={id} value={value || ''} {...rest}>
        <option value="">Select a format...</option>
        {options.map((option) => (
          <option key={option[valueKey]} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
        <option value="">{placeholder}</option>
      </StyledSelect>
    </StyledFieldSet>
  );
};
