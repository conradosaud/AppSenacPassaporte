# Arquitetura do sistema
- Este é um sistema web
- O foco dele é exclusivamente para celulares
    - Exceto a parte administrativa, com gráficos, onde serão vistos no computador desktop

## Tecnologias
- React com Vite
- Não use nenhuma biblioteca ou framework
- Use CSS puro, não use Bootstrap nem Tailwind
- Não instale nenhuma biblioteca sem a minha permissão

## LocalStorage
No primeiro acesso do usuário, armazene os dados no localStorage, de forma que caso o usuário
feche e abra o navegador, ele já esteja logado

## Banco de dados
- Supabase
- As informações de conexão com a API estão no arquivo `.env`

## Códigos
- Evite usar componentes, prefira monoblocos
- Faça componentização apenas quando for muito necessário para tornar o código mais limpo
- Use apenas `useState` e `useEffect`. Não use nenhum outro hook