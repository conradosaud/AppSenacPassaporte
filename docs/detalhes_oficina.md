# PASSAPORTE SENAC — Grupo 4

## Integrantes do Grupo 4
`Vanessa`, `Nicolas`, `Gabriel`, `Leonardo`

## Sistemas sob nossa responsabilidade
- **Detalhes de uma oficina** — tela que exibe as informações de uma oficina específica
- **Concluir uma oficina** — ação de conclusão que gera o carimbo no passaporte

---

## Dados da oficina (tela de Detalhes)

Campos que a tela precisa exibir:

| Campo | Descrição | Exemplo (base real Casa Aberta) |
|---|---|---|
| **Nome da oficina** | Título da atividade | "Moqueca de Peixe: A Culinária Angolana no Nordeste Brasileiro" |
| **Categoria** | Área de conhecimento à qual a oficina pertence (ver lista oficial abaixo) | Gastronomia e Alimentação |
| **Período** | Bloco do dia em que ela acontece (derivado do horário) | Tarde |
| **Descrição** | Texto explicando do que se trata a atividade | "Nesta oficina, os participantes vão aprender a preparar a autêntica moqueca de peixe, um prato afro-brasileiro típico do Nordeste, conhecendo ingredientes e, no final, degustando." |
| Horário de Inicio | Início oficina | 12h30  |
| Horário de Término | Fim da oficina | 13h |
| Local / Sala | Sala ou espaço físico onde ocorre | Laboratório 15 |


### Categorias oficiais (usadas pelo Senac em todas as unidades)
Beleza e Estética · Bem-estar · Comunicação e Marketing · Desenvolvimento Social ·
Design, Artes e Arquitetura · Educação · Gastronomia e Alimentação · Gestão e
Negócios · Idiomas · Meio Ambiente · Segurança e Saúde no Trabalho · Moda ·
Saúde · Tecnologia da Informação · Turismo e Hospitalidade

### Como o Período é calculado
O período não é digitado, é derivado automaticamente a partir do horário de
início da oficina:
- **Manhã:** 6h até 11h59
- **Tarde:** 12h00 às 17h59
- **Noite:** 18h00 às 23h

---

## Fluxo de "Concluir uma oficina"

1. Visitante abre a tela de Detalhes de uma oficina não concluída.
2. Toca em **"Concluir oficina"**.
3. Sistema pede avaliação (1–5 estrelas, opcional) e comentário (opcional).
4. Tela muda para o estado "concluída", mostrando o carimbo e a nota dada.
