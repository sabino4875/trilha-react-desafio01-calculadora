import styled from 'styled-components';

export const InputContainer = styled.div<object>`
    width: 100%;
    height: ${(props) => props.theme.inputTheme.height};
    background-color: ${(props) => props.theme.inputTheme.background};
    display: flex;
    align-items: center;
    justify-content: flex-end;    

    input {
        width: 100%;
        height: ${(props) => props.theme.inputTheme.height};
        background-color: ${(props) => props.theme.inputTheme.background};
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 ${(props) => props.theme.inputTheme.padding};
        font-size: ${(props) => props.theme.inputTheme.fontSize};
        font-family: 'Roboto';
        color: ${(props) => props.theme.inputTheme.foreground};
    }
`;
