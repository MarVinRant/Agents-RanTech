# RanTech Agentes Platform V1

Protótipo visual de uma plataforma multiempresa para organizar atendimento, agentes e operação de negócios.

Este repositório representa a primeira camada do produto: uma experiência de administração e portal preparada para evoluir. O objetivo desta versão é validar estrutura, navegação e direção visual antes da conexão com serviços reais.

## Estado atual

A V1 implementa uma interface responsiva com:

- AppShell com sidebar recolhível e navegação principal;
- contexto de organização, notificações e perfil;
- dashboard com métricas, gráfico, atividade recente e organizações em destaque;
- componentes visuais reutilizáveis e tokens de design;
- dados de demonstração por meio de mocks.

Importante: esta versão ainda não possui API, autenticação, Supabase, n8n, WhatsApp ou OpenAI conectados. Esses itens permanecem como evolução planejada e não são apresentados como funcionalidades entregues.

## Arquitetura da V1

- `app/` — rotas e composição da aplicação;
- `app/globals.css` — tokens e estilos globais;
- `lib/supabase/` — espaço reservado para futura integração;
- `mocks/` — dados de demonstração;
- `public/brand/` — assets visuais;
- `middleware.ts` — camada de middleware preparada para evolução.

Documentos relacionados:

- [Arquitetura](ARCHITECTURE.md)
- [Sistema visual](DESIGN_SYSTEM.md)
- [Roadmap](ROADMAP.md)

## Stack

- Next.js e React
- TypeScript
- CSS e tokens de design
- Mocks para demonstração
- Vercel para o deployment de demonstração

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Segurança e escopo público

O repositório público contém apenas configurações de exemplo. Valores de ambiente, credenciais, identificadores internos, webhooks e integrações privadas não fazem parte deste README nem da versão pública.

Qualquer futura conexão com autenticação, banco, agentes ou automações deverá passar por auditoria de segurança e documentação específica antes de ser apresentada como parte do case público.

## Roadmap

1. consolidar a arquitetura de organizações e permissões;
2. conectar autenticação e persistência quando o contrato do produto estiver definido;
3. separar claramente Admin, Portal do Cliente e operação de agentes;
4. integrar automações e provedores externos com credenciais protegidas;
5. validar fluxos reais com testes e observabilidade.

## Sobre o case

O Agents-RanTech é apresentado como um laboratório de produto: a V1 demonstra hierarquia de informação, experiência de operação e sistema visual; as integrações reais permanecem uma etapa posterior, sujeita a validação técnica e de segurança.
