export const organizations = [
  { id: "central", name: "Barbearia Central", segment: "Barbearia", status: "Em produção", plan: "Growth", agent: "Rafa", version: "v1.2", created: "12 mar 2026", homologation: "Concluída" },
  { id: "norte", name: "Oficina Norte", segment: "Oficina mecânica", status: "Homologação", plan: "Starter", agent: "Oficina", version: "v1.0", created: "04 abr 2026", homologation: "Dia 5 de 7" },
  { id: "navalha", name: "Studio Navalha", segment: "Barbearia", status: "Configuração", plan: "Starter", agent: "Não configurado", version: "—", created: "18 abr 2026", homologation: "Pendente" },
  { id: "pneu", name: "Flavinho do Pneu", segment: "Oficina mecânica", status: "Demo", plan: "Demo", agent: "Flavinho", version: "v0.9", created: "25 abr 2026", homologation: "Não iniciada" },
];
export const agents = [
  { name: "Rafa", organization: "Barbearia Central", segment: "Barbearia", type: "Atendimento", status: "Ativo", model: "GPT-4o mini", version: "v1.2", activity: "Há 2 min" },
  { name: "Oficina", organization: "Oficina Norte", segment: "Oficina mecânica", type: "Comercial", status: "Em teste", model: "GPT-4o mini", version: "v1.0", activity: "Há 18 min" },
  { name: "Flavinho", organization: "Flavinho do Pneu", segment: "Oficina mecânica", type: "Atendimento", status: "Pausado", model: "GPT-4o mini", version: "v0.9", activity: "Ontem" },
];
export const customers = [
  { name: "Marcos Cardoso", phone: "+55 11 98888-1204", organization: "Barbearia Central", last: "Hoje, 10:42", conversations: 18, service: "Corte + barba", status: "Ativo" },
  { name: "Ana Souza", phone: "+55 11 97777-2210", organization: "Barbearia Central", last: "Hoje, 09:18", conversations: 7, service: "Corte", status: "Ativo" },
  { name: "Ricardo Lima", phone: "+55 11 96666-4501", organization: "Oficina Norte", last: "Ontem, 16:20", conversations: 4, service: "Troca de óleo", status: "Aguardando" },
  { name: "Paulo Mendes", phone: "+55 11 95555-3390", organization: "Studio Navalha", last: "25 abr, 14:12", conversations: 2, service: "—", status: "Novo" },
];
export const conversations = [
  { id: "c1", customer: "Marcos Cardoso", organization: "Barbearia Central", channel: "WhatsApp", preview: "Perfeito, pode reservar para amanhã?", time: "10:42", status: "Em atendimento", initials: "MC" },
  { id: "c2", customer: "Ricardo Lima", organization: "Oficina Norte", channel: "WhatsApp", preview: "Vou verificar com o mecânico.", time: "09:58", status: "Aguardando humano", initials: "RL" },
  { id: "c3", customer: "Ana Souza", organization: "Barbearia Central", channel: "WhatsApp", preview: "Obrigada pelo atendimento!", time: "09:18", status: "Resolvido pela IA", initials: "AS" },
  { id: "c4", customer: "Paulo Mendes", organization: "Studio Navalha", channel: "Web", preview: "Quais horários vocês têm hoje?", time: "Ontem", status: "Encerrado", initials: "PM" },
];
export const appointments = [
  { date: "Hoje", time: "09:30", customer: "Ana Souza", organization: "Barbearia Central", service: "Corte", professional: "João", status: "Confirmado" },
  { date: "Hoje", time: "11:00", customer: "Marcos Cardoso", organization: "Barbearia Central", service: "Corte + barba", professional: "Pedro", status: "Pendente" },
  { date: "Hoje", time: "14:30", customer: "Ricardo Lima", organization: "Oficina Norte", service: "Troca de óleo", professional: "Carlos", status: "Concluído" },
  { date: "Amanhã", time: "08:00", customer: "Paulo Mendes", organization: "Studio Navalha", service: "Barba", professional: "João", status: "Cancelado" },
];
export const services = [
  { name: "Corte", organization: "Barbearia Central", description: "Corte tradicional ou degradê", price: "R$ 45,00", duration: "40 min", status: "Ativo" },
  { name: "Corte + barba", organization: "Barbearia Central", description: "Combo completo", price: "R$ 75,00", duration: "70 min", status: "Ativo" },
  { name: "Troca de óleo", organization: "Oficina Norte", description: "Óleo e filtro inclusos", price: "R$ 180,00", duration: "50 min", status: "Ativo" },
  { name: "Alinhamento", organization: "Oficina Norte", description: "Alinhamento computadorizado", price: "R$ 120,00", duration: "45 min", status: "Inativo" },
];
export const professionals = [
  { name: "João Silva", organization: "Barbearia Central", role: "Barbeiro", phone: "+55 11 98888-3301", services: "Corte, Barba", status: "Ativo" },
  { name: "Pedro Alves", organization: "Barbearia Central", role: "Barbeiro", phone: "+55 11 97777-4420", services: "Corte + barba", status: "Ativo" },
  { name: "Carlos Souza", organization: "Oficina Norte", role: "Mecânico", phone: "+55 11 96666-5510", services: "Troca de óleo", status: "Ativo" },
  { name: "Rafael Costa", organization: "Oficina Norte", role: "Alinhador", phone: "+55 11 95555-6612", services: "Alinhamento", status: "Férias" },
];
export const knowledge = [
  { category: "Horários", title: "Horário de funcionamento", organization: "Barbearia Central", summary: "Segunda a sábado, das 9h às 20h.", updated: "Hoje, 08:14", status: "Publicado" },
  { category: "Preços", title: "Tabela de serviços", organization: "Barbearia Central", summary: "Valores de corte, barba e combos.", updated: "Ontem", status: "Publicado" },
  { category: "FAQ", title: "Política de cancelamento", organization: "Oficina Norte", summary: "Cancelamentos devem ser feitos com 2h de antecedência.", updated: "22 abr", status: "Rascunho" },
  { category: "Endereço", title: "Como chegar", organization: "Oficina Norte", summary: "Rua das Flores, 120 — São Paulo.", updated: "20 abr", status: "Publicado" },
];
export const handoffs = [
  { customer: "Ricardo Lima", organization: "Oficina Norte", conversation: "Orçamento de alinhamento", reason: "Cliente pediu negociação", agent: "Oficina", status: "Solicitado", time: "09:58", waiting: "12 min" },
  { customer: "Paulo Mendes", organization: "Studio Navalha", conversation: "Horário especial", reason: "Fora da base de conhecimento", agent: "—", status: "Aceito", time: "Ontem, 14:12", waiting: "Resolvido" },
  { customer: "Juliana Reis", organization: "Barbearia Central", conversation: "Reclamação", reason: "Solicitação explícita", agent: "Rafa", status: "Resolvido", time: "25 abr, 11:04", waiting: "18 min" },
];
export const events = [
  ["10:42:18", "Barbearia Central", "Rafa", "Mensagem recebida", "Sucesso"],
  ["10:42:20", "Barbearia Central", "Rafa", "Resposta IA", "Sucesso"],
  ["09:58:03", "Oficina Norte", "Oficina", "Handoff solicitado", "Pendente"],
  ["09:31:44", "Barbearia Central", "Rafa", "Agendamento criado", "Sucesso"],
  ["08:17:29", "Oficina Norte", "Oficina", "Erro no fluxo", "Atenção"],
];
export const organizationsByName = Object.fromEntries(organizations.map((organization) => [organization.name, organization]));
