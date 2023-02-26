import styled from "styled-components";

export const Container = styled.button`
    height: 5.6rem;
    width: 100%;

    background-color: ${({ theme })=> theme.COLORS.ORANGE};

    color: ${({ theme })=> theme.COLORS.BACKGROUND_800};
    font-weight: 500;

    border: 0;
    border-radius: 1rem;

    padding: 0 1.6rem;

    margin-top: 1.6rem;

    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }

`