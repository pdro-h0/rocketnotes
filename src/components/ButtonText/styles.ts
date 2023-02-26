import styled from "styled-components";
import { ThemeType } from '../../types/ThemeType'

type ColorStyledProps={
  theme:ThemeType,
  isActive?: boolean
}

export const Container = styled.button`
  background: none;

  border: none;
  
  color: ${({ theme, isActive }:ColorStyledProps) => isActive ?  theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-size: 1.6rem;
`;
