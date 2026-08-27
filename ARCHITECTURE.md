# Arquitetura da plataforma

- app/: rotas e layout do App Router.
- components/: componentes reutilizáveis futuros.
- features/: domínios por módulo.
- mocks/: dados fictícios da primeira etapa.
- lib/, hooks/, types/: contratos e integrações futuras.

O primeiro corte mantém o dashboard autocontido para validar direção visual e navegação antes de introduzir persistência. A autorização real deverá vir do Supabase Auth + RLS; nenhum controle de permissão é considerado implementado.
