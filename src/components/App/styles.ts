import styled from 'styled-components';

export const Container = styled.div<object>`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Content = styled.div<object>`
    background-color: #FFFFFF;
    width: 50%;
`;

export const Row = styled.div<object>`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div<object>`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;