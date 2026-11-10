import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.jsx';
describe('App', () => {
  it('mostra o título e os contatos principais', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('move a indústria');
    expect(document.body.textContent).toContain('3852-7415');
    expect(screen.getAllByRole('link', { name: /comercial@vanmar\.ind\.br/ }).length).toBeGreaterThan(0);
  });
  it('filtra projetos por categoria', () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll('.project')).toHaveLength(4);
    fireEvent.click(screen.getByRole('button', { name: 'Recuperação' }));
    expect(container.querySelectorAll('.project')).toHaveLength(2);
    expect(screen.getByRole('button', { name: 'Recuperação' }).getAttribute('aria-pressed')).toBe('true');
  });
  it('abre e fecha o menu móvel', () => {
    render(<App />);
    const b = screen.getByRole('button', { name: 'Abrir menu' });
    fireEvent.click(b);
    expect(b.getAttribute('aria-expanded')).toBe('true');
  });
  it('não mostra texto de demonstração nem as barras de pontes', () => {
    const { container } = render(<App />);
    expect(document.body.textContent).not.toContain('Demonstração');
    expect(container.querySelector('.cranes')).toBeNull();
  });
  it('lista os parceiros', () => {
    render(<App />);
    expect(screen.getByText('Hydrapar')).toBeTruthy();
  });
});
