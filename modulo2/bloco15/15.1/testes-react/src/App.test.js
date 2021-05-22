import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica a existência de um botão na aplicação', () => {
  render(<App />);
  const verificaBotao = screen.getByRole('button');
  expect(verificaBotao).toBe('button');
})

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// });
