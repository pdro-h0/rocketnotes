import styled from "styled-components";
import { ThemeType } from '../../types/ThemeType'

type ContainerProps={
    theme:ThemeType,
    isNew: boolean
}

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }:ContainerProps)=> isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
    
    color: ${({ theme })=> theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }:ContainerProps)=> isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    margin-bottom: .8rem;

    border-radius: 10px;

    padding-right: 1.6rem;


    > button{
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({ theme })=> theme.COLORS.RED};
    }

    .button-add{
        color: ${({ theme })=> theme.COLORS.ORANGE};
    }

    > input{
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({ theme })=> theme.COLORS.WHITE};

        background: transparent;

        border: 0;

        outline: 0;

        &::placeholder{
            color: ${({ theme })=> theme.COLORS.GRA_300};
        }

    }
`