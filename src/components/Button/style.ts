import styled from 'styled-components';

export const ButtonContainer = styled.button<object>`
    padding: ${(props) => props.theme.buttonTheme.padding};
    border: 1px solid ${(props) => props.theme.buttonTheme.border};
    background-color: ${(props) => props.theme.buttonTheme.background};
    color: ${(props) => props.theme.buttonTheme.foreground};
    font-size: ${(props) => props.theme.buttonTheme.fontSize};
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }`;