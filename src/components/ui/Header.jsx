/**
 * Represents the header component of the application.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be rendered inside the header.
 * @returns {JSX.Element} The rendered header component.
 */
import { styled } from "styled-components";

const StyledLogo = styled.img`
  width: 50px; 
  height: auto; 
  margin-bottom: 10px; 
`;

const StyledHeader = styled.header`
  background-color: lightgrey;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  color: #010101;
  padding: 20px;
  text-align: center;
  width: 100%;
`;

const LogoMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <LogoMenuContainer>
        <StyledLogo src="/logo192.png" alt="Ethernet logo" />
        <div>{props.children}</div> 
      </LogoMenuContainer>
    </StyledHeader>
  );
}
