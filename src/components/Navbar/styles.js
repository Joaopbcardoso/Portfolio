import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent);
    }
  }
`;