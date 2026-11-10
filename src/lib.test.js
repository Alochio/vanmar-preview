import { buildMailto } from './lib.js';
describe('buildMailto', () => {
  it('usa a empresa no assunto e codifica o corpo', () => {
    const url = buildMailto({ name: 'Ana', company: 'Gerdau', email: 'a@g.com', message: 'Olá\nPreciso de orçamento' });
    expect(url.startsWith('mailto:comercial@vanmar.ind.br?subject=')).toBe(true);
    expect(decodeURIComponent(url)).toContain('Solicitação de orçamento — Gerdau');
    expect(decodeURIComponent(url)).toContain('Nome: Ana');
  });
  it('cai para o nome quando não há empresa', () => {
    expect(decodeURIComponent(buildMailto({ name: 'Ana' }))).toContain('— Ana');
  });
});
