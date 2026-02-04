Title: Corrigir referência @sass/prettier → @saas/prettier em config/eslint-config

Descrição:
Um typo em `config/eslint-config/package.json` usa `@sass/prettier` (inexistente) como `devDependencies` com `workspace:*`, causando falha em `pnpm -w install` por não conseguir resolver o pacote local.

Como reproduzir:
1. Na raiz do projeto: `pnpm -w install`
2. Observar erro indicando que `@sass/prettier@workspace:*` não tem correspondência no monorepo.

Causa:
Entrada incorreta em `devDependencies` (`@sass/prettier` em vez de `@saas/prettier`).

Solução proposta:
- Corrigir `config/eslint-config/package.json` para usar `@saas/prettier`.
- Adicionar uma verificação de CI que rode `pnpm -w install --frozen-lockfile` em PRs para detectar referências inválidas no futuro.

Checklist de implementação:
- [x] Corrigir typo em `config/eslint-config/package.json`
- [x] Adicionar workflow `.github/workflows/ci-workspace-check.yml` que roda `pnpm -w install --frozen-lockfile` em PRs
- [x] Criar branch `fix/prettier-workspace-name`, commitar e abrir PR

Verificação:
- Rodar `pnpm -w install` localmente deve terminar sem erro
- Pipeline do PR deve passar no job `workspace-install`

Notas:
- PR: https://github.com/deyvsonaguiar/saas-rbac-nextjs-rockeseat/pull/new/fix/prettier-workspace-name
