import { InputContainer } from "./style";

type InputProps = {
    value: string
}

const Input: React.FunctionComponent<InputProps> = (props) =>  
    <InputContainer>
        <input disabled value={props.value}/>
    </InputContainer>;

export default Input;