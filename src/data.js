export const services = [
  { name: 'Usinagem e fabricação', text: 'Peças e equipamentos industriais, com capacidade técnica para atender às demandas da sua operação.', tags: ['Peças', 'Conjuntos', 'Equipamentos'], image: 'cadeira-laminacao.webp' },
  { name: 'Manutenção e recuperação', text: 'Recuperação de conjuntos, cadeiras de laminação, rolos alimentadores e máquinas de lingotamento contínuo.', tags: ['Reparos', 'Montagem', 'Recuperação'], image: 'truck-de-moagem.webp' },
  { name: 'Caldeiraria e projetos', text: 'Soluções em caldeiraria e projetos para aplicações industriais, integradas à usinagem e à manutenção mecânica.', tags: ['Caldeiraria', 'Projetos', 'Indústria'], image: 'rolo-de-apoio.webp' },
];
export const projects = [
  { name: 'Válvulas de regeneradores', category: 'Manutenção', client: 'ArcelorMittal', image: 'valvulas.webp', desc: 'Reparo completo em válvulas dos regeneradores do alto-forno.' },
  { name: 'Truck de moagem', category: 'Recuperação', client: 'ArcelorMittal', image: 'truck-de-moagem.webp', desc: 'Reparo completo em conjunto de truck de moagem de carvão (ICP).' },
  { name: 'Cadeiras de laminação', category: 'Recuperação', client: 'Gerdau', image: 'cadeira-laminacao.webp', desc: 'Reparo completo em suporte de acionamento das cadeiras de laminação de fio-máquina.' },
  { name: 'Rolo de apoio', category: 'Manutenção', client: 'Vallourec', image: 'rolo-de-apoio.webp', desc: 'Reparo em rolo de apoio do forno rotativo de pelotização.' },
];
export const specs = [['2007', '', 'Início da nossa história'], ['28.000', 'm²', 'Área total'], ['2.800', 'm²', 'Área coberta'], ['30', 't', 'Maior ponte rolante']];
export const filters = ['Todos', 'Manutenção', 'Recuperação'];
export const START = 2007;
export const repairs = [
  ['Cadeiras de laminação', 'Reparo completo em cadeira de laminação, fio-máquina.'],
  ['Lingotamento contínuo', 'Reparo completo em máquinas de lingotamento contínuo.'],
  ['Rolos alimentadores', 'Reparo completo em conjunto de rolos alimentadores triplos e duplos.'],
  ['Válvulas', 'Reparo completo em válvulas DN 300, 600, 900 e 1600.'],
  ['Trucks e pontes', 'Reparo completo em pontes e truck do carro torpedo.'],
];
export const timeline = [
  ['2007', 'Fundação, com foco em injeção de plástico a partir de materiais reciclados.'],
  ['2010', 'Mudança para a indústria, no ramo de usinagem e manutenção.'],
  ['Hoje', 'Presença ativa entre as grandes indústrias nacionais.'],
];
export const clients = [
  { name: 'ArcelorMittal', big: true }, { name: 'Gerdau', big: true }, { name: 'Vallourec', big: true },
  { name: 'Vesuvius' }, { name: 'Tratex' }, { name: 'Projetele' }, { name: 'Hydrapar' },
]; // para usar logo: { name: 'Gerdau', big: true, logo: 'gerdau.png' } e salvar em public/images/clientes/
export const caps = [
  ['Maquinário industrial', 'Centros de usinagem, calandras, mandrilhadoras e fresadoras.'],
  ['Movimentação de grandes conjuntos', 'Pontes rolantes com capacidades de 30 t, 15 t e 3 t.'],
  ['Carga líquida', 'Credenciamento em reparo de equipamentos de carga líquida.'],
  ['Estrutura integrada', 'Frota própria e profissionais das áreas administrativa, técnica, engenharia e produção.'],
];
