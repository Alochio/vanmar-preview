export const EMAIL = 'comercial@vanmar.ind.br';
export function buildMailto({ name = '', company = '', email = '', message = '' }) {
  const subject = encodeURIComponent(`Solicitação de orçamento — ${company || name}`);
  const body = encodeURIComponent(`Nome: ${name}\nEmpresa: ${company}\nE-mail: ${email}\n\n${message}`);
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}
