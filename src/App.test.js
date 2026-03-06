import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About section title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sobre Mí/i);
  expect(linkElement).toBeInTheDocument();
});
