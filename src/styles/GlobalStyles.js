import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #007bff;
    --secondary: #0056b3;
    --background: #0a192f;
    --text: #e6f1ff;
    --accent: #64ffda;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }

  .container {
    max-width: 100vh;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section {
    padding: 5rem 0;
  }

  .glow {
    text-shadow: 0 0 10px var(--accent),
                 0 0 20px var(--accent),
                 0 0 30px var(--accent);
  }
`;