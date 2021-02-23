import styled from 'styled-components';

interface ContainerProps {
  aligment?: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch';
  justify?:
    | 'flex-end'
    | 'flex-start'
    | 'space-arround'
    | 'space-between'
    | 'center';
  padding?: string;
  margin?: string;
  width?: string;
  heigth?: string;
  gap?: string;
}

interface ButtonProps {
  styling?: 'primary' | 'secondary' | 'default' | 'danger' | 'success';
  round?: 'full' | 'rounded';
}

export const FlexRow = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: ${(props) => props.aligment};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  gap: ${(props) => props.gap};
`;

export const FlexColumn = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: ${(props) => props.aligment};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  gap: ${(props) => props.gap};
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 18px;
  font-weight: bold;
  color: #fff;
  border-radius: ${(props) => {
    if (props.round === 'full') {
      return '30px';
    } else {
      return '6px';
    }
  }};
  background: ${(props) => {
    const { styling } = props;
    if (styling === 'success') {
      return '#4caf50';
    } else if (styling === 'secondary') {
      return '#fff';
    } else if (styling === 'danger') {
      return '#f44336';
    } else if (styling === 'primary') {
      return '#03a9f4';
    }
    return '#b0bec5';
  }};
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;
