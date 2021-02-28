import React from 'react';
import { StyledForm } from './form.styles';

export const Form = React.forwardRef((props: any, ref) => {
  const { onSubmit, children, ...rest } = props;
  return (
    <StyledForm {...rest} ref={ref} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
});
