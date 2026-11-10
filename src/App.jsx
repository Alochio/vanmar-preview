import { useEffect, useRef, useState } from 'react';
import { services, projects, specs, filters, repairs, timeline, clients, caps, START } from './data.js';
import { buildMailto, EMAIL } from './lib.js';

const img = n => `${import.meta.env.BASE_URL}images/${n}`;
const Arrow = () => <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 19 19 5M5 5h14v14" /></svg>;
const links = [['empresa', 'A Vanmar'], ['solucoes', 'Soluções'], ['estrutura', 'Estrutura'], ['projetos', 'Projetos'], ['parceiros', 'Parceiros']];

export default function App() {
  const [menu, setMenu] = useState(false), [solid, setSolid] = useState(false), [filter, setFilter] = useState('Todos'), [selected, setSelected] = useState(null), [sent, setSent] = useState(false);
  const dialog = useRef(null), menuBtn = useRef(null);
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  useEffect(() => { if (selected) dialog.current?.showModal?.(); else dialog.current?.close?.(); }, [selected]);
  useEffect(() => { const k = e => { if (e.key === 'Escape') { setMenu(false); menuBtn.current?.focus(); } }; document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k); }, []);
  const submit = e => { e.preventDefault(); window.location.href = buildMailto(Object.fromEntries(new FormData(e.currentTarget))); setSent(true); };
  const visible = projects.filter(p => filter === 'Todos' || p.category === filter);

  return <>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header className={solid || menu ? 'solid' : ''}><div className="nav wrap">
      <a href="#inicio" className="brand" aria-label="Vanmar, início"><img src={img('logo-white.png')} alt="Vanmar Usinagem e Manutenção" /></a>
      <nav id="navigation" className={menu ? 'open' : ''} aria-label="Navegação principal">
        {links.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{l}</a>)}
        <a className="btn nav-cta" href="#contato" onClick={() => setMenu(false)}>Pedir orçamento <Arrow /></a>
      </nav>
      <button className="menu-btn" ref={menuBtn} aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-controls="navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? '✕' : '☰'}</button>
    </div></header>

    <main id="conteudo">
      <section className="hero" id="inicio">
        <img className="hero-img" src={img('hero.webp')} alt="Estrutura industrial da Vanmar" fetchPriority="high" />
        <div className="wrap hero-in">
          <h1><span>Precisão que</span> <span>move a indústria.</span></h1>
          <p className="lead">Usinagem, fabricação e manutenção para transformar desafios industriais em operações que seguem em frente.</p>
          <div className="actions"><a className="btn" href="#contato">Pedir orçamento <Arrow /></a><a className="btn ghost" href="#solucoes">Ver soluções</a></div>
          <svg className="dim" viewBox="0 0 600 24" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" vectorEffect="non-scaling-stroke" d="M1 2v20M599 2v20M1 12H599" /></svg>
          <p className="dim-label">João Monlevade, MG — fundada em 2007</p>
        </div>
      </section>

      <dl className="specs wrap">{specs.map(([v, u, l]) => <div key={l}><dt>{l}</dt><dd>{v}{u && <small> {u}</small>}</dd></div>)}</dl>

      <section className="section wrap about" id="empresa">
        <div><h2>Grandes desafios.<br /><span>Compromisso em cada detalhe.</span></h2><ol className="timeline">{timeline.map(([y, t]) => <li key={y}><b>{y}</b><span>{t}</span></li>)}</ol></div>
        <div className="about-copy">
          <p className="big">Experiência que se transforma em soluções para a indústria.</p>
          <p>Fundada em 2007, a Vanmar construiu sua trajetória com responsabilidade, comprometimento, segurança e qualidade. Desde 2010, atua no segmento de usinagem e manutenção industrial.</p>
          <p>Reunimos profissionais das áreas técnica, de engenharia e de produção para fabricar, recuperar e manter peças e equipamentos industriais.</p>
          <p>O fundador, Vander Célio Gomes, já atuava em usinagem e manutenção havia mais de 20 anos quando levou a empresa para a indústria. A equipe busca ser referência em recuperação de conjuntos, com inovação e capacitação.</p>
        </div>
      </section>

      <section className="section services" id="solucoes"><div className="wrap">
        <h2>Da peça ao conjunto.</h2><p className="sub">Capacidade técnica e experiência prática a serviço da sua operação.</p>
        <div className="service-list">{services.map(s => <article className="service" key={s.name}>
          <div><h3>{s.name}</h3><p>{s.text}</p><ul className="chips">{s.tags.map(t => <li key={t}>{t}</li>)}</ul></div>
        </article>)}</div>
        <h3 className="rep-title">Reparos completos</h3><ul className="repairs">{repairs.map(([n, t]) => <li key={n}><strong>{n}</strong><span>{t}</span></li>)}</ul>
      </div></section>

      <section className="structure" id="estrutura">
        <div className="structure-photo"><img src={img('hero.webp')} alt="Fachada das instalações da Vanmar" loading="lazy" /></div>
        <div className="structure-copy">
          <h2>Preparada para a dimensão do seu desafio.</h2>
          <ul className="caps">{caps.map(([h, t]) => <li key={h}><h3>{h}</h3><p>{t}</p></li>)}</ul>
        </div>
      </section>

      <section className="section wrap" id="projetos">
        <div className="head"><h2>Nosso trabalho.<br /><span>Na prática.</span></h2>
          <div className="filters" role="group" aria-label="Filtrar projetos">{filters.map(f => <button key={f} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>)}</div></div>
        <div className="project-grid">{visible.map(p => <button className="project" key={p.name} onClick={() => setSelected(p)}>
          <span className="pimg"><img src={img(p.image)} alt={p.name} loading="lazy" /></span>
          <small>{p.client} · {p.category}</small><h3>{p.name}</h3></button>)}</div>
      </section>

      <section className="partners" id="parceiros"><div className="wrap">
        <h2>Parceiros da indústria há {new Date().getFullYear() - START} anos.</h2>
        <p className="sub">Siderúrgicas, mineradoras e fornecedores que contam com a Vanmar.</p>
        <ul className="logos">{clients.map(c => <li key={c.name} className={c.big ? 'big' : ''}>{c.logo ? <img src={img(`clientes/${c.logo}`)} alt={c.name} /> : <span>{c.name}</span>}</li>)}</ul>
      </div></section>

      <section className="values"><div className="wrap">
        <h2>Indústria forte.<br /><span>Comunidade presente.</span></h2>
        <div><p>Com o projeto <strong>Vanmar na Comunidade</strong>, mantemos um relacionamento contínuo com nossa cidade e apoiamos o crescimento sustentável.</p><p>Responsabilidade social e ambiental faz parte da nossa forma de trabalhar.</p></div>
      </div></section>

      <section className="section contact" id="contato"><div className="wrap contact-grid">
        <div>
          <h2>Seu próximo desafio começa com uma boa conversa.</h2>
          <p className="sub">Fale com nossa equipe comercial.</p>
          <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="tel" href="tel:+553138513536">(31) 3851-3536</a>
          <a className="tel" href="tel:+5531988996641">(31) 98899-6641</a>
          <a className="tel" href="tel:+553138527415">(31) 3852-7415</a>
          <a className="btn ghost wa" href="https://wa.me/5531988996641" target="_blank" rel="noreferrer">Chamar no WhatsApp <Arrow /></a>
          <address>BR-262, 381 · Cruzeiro Celeste<br />João Monlevade — Minas Gerais<br /><span>Segunda a sexta, das 7h às 17h</span></address>
        </div>
        <form onSubmit={submit}>
          <h3>Vamos falar sobre o seu projeto?</h3>
          <div className="row"><label>Seu nome<input name="name" autoComplete="name" required maxLength="100" /></label><label>Empresa<input name="company" autoComplete="organization" maxLength="120" /></label></div>
          <label>E-mail corporativo<input type="email" name="email" autoComplete="email" required placeholder="voce@empresa.com.br" maxLength="180" /></label>
          <label>Como podemos ajudar?<textarea name="message" required rows="4" maxLength="2000" /></label>
          <button className="btn" type="submit">Preparar e-mail <Arrow /></button>
          <p className="note" role="status">{sent ? `Pedimos ao seu aplicativo de e-mail que abra a mensagem. Se ele não abrir, escreva para ${EMAIL}.` : 'Abriremos seu aplicativo de e-mail com a mensagem preenchida. O envio é feito por você.'}</p>
        </form>
      </div><div className="wrap"><iframe className="map" title="Localização da Vanmar" loading="lazy" src="https://maps.google.com/maps?q=Vanmar%20Usinagem%20e%20Manuten%C3%A7%C3%A3o%20Ltda%2C%20BR-262%2C%20381%20-%20Cruzeiro%20Celeste%2C%20Jo%C3%A3o%20Monlevade%20-%20MG&t=m&z=15&output=embed" /></div></section>
    </main>

    <footer><div className="wrap foot"><a href="#inicio" className="brand"><img src={img('logo-white.png')} alt="Vanmar" /></a><p>Tradição, comprometimento, segurança e qualidade.</p><a href="https://www.instagram.com/vanmar_usinagem/" target="_blank" rel="noreferrer">Instagram</a><a href="#inicio">Voltar ao topo ↑</a></div>
      <div className="wrap legal"><span>© {new Date().getFullYear()} Vanmar Usinagem e Manutenção.</span></div></footer>

    <dialog aria-label="Detalhes do projeto" ref={dialog} onCancel={() => setSelected(null)} onClick={e => { if (e.target === e.currentTarget) setSelected(null); }}>
      <button className="close" aria-label="Fechar projeto" onClick={() => setSelected(null)}>✕</button>
      {selected && <><img src={img(selected.image)} alt={selected.name} /><div className="dlg"><small>{selected.client} · {selected.category}</small><h2>{selected.name}</h2><p>{selected.desc}</p><a className="btn" href="#contato" onClick={() => setSelected(null)}>Solicitar solução semelhante <Arrow /></a></div></>}
    </dialog>
  </>;
}
