import React from 'react';
import { ButtonContainer } from './style';

interface ButtonProps {
    label: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FunctionComponent<ButtonProps> = (props) => 
    <ButtonContainer  onClick={props.onClick} 
                      type="button" >
        {props.label}
    </ButtonContainer>;
  
export default Button;