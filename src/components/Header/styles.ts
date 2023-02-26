import styled from "styled-components";
import { ThemeType } from '../../types/ThemeType'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    height: 10.5rem;
    width: 100%;

    border-bottom: 1px solid ${({ theme })=> theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 8rem;
`;


export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img{
        width: 5.6rem;
        height: 5.6rem;

        clip-path: circle();
        object-fit: contain;
    }

    > div{
        display: flex;
        flex-direction: column;

        margin-left: 1.6rem;

        line-height: 2.4rem;
    }

    span{
        font-size: 1.4rem;
        color: ${({ theme })=> theme.COLORS.GRAY_100};
    }

    strong{
        font-size: 1.8rem;
        color: ${({ theme })=> theme.COLORS.WHITE};
    }
`
export const LogOut = styled.button`
    border: none;
    background: none;

   > svg{
        color: ${({ theme })=> theme.COLORS.GRAY_100};
        font-size: 3.6rem;
    }
`