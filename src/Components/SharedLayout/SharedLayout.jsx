import { Outlet } from "react-router-dom";
import { StyledLink, Container, Header, Logo } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/About">About</StyledLink>
          <StyledLink to="/Products">Products</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
