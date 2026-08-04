## Sistemas

### Visitante

- Cronograma de oficinas
    - oficinas disponíveis
        - Nome Oficina
        - Periodo separado por seção
        - Curso
        - Horario de inicio e termino oficina

## Descrição da imagem de referência (Casa Aberta)

A imagem é um **mockup de programação de evento**, no padrão visual do Senac, representando visualmente como o cronograma de oficinas deve ser exibido para o visitante. Abaixo está o detalhamento de cada elemento, útil para especificar os campos e regras do sistema.

### Cabeçalho (header)

- Logo do Senac (canto superior esquerdo), fundo azul escuro
- Título do evento: **"Casa Aberta"** (com "Casa" em branco e "Aberta" em laranja)
- Subtítulo: "Um dia inteiro de aprendizado prático"

### Título da seção

- Ícone de calendário + título **"Programação"**
- Texto de apoio: "Veja os horários das oficinas"

### Estrutura da tabela (grade de horários)

A tabela cruza **Curso** (linhas) x **Horário** (colunas), com blocos de oficina posicionados conforme seu horário de início/término. Isso indica que, no sistema, cada oficina precisa de:

- `nome_oficina` (texto)
- `curso` (categoria/área — define a linha e a cor do bloco)
- `sala` (subtítulo do curso, ex: "Sala 1")
- `horario_inicio`
- `horario_termino`
- `periodo` (Manhã / Tarde / Noite — calculado a partir do horário, ou selecionado em seção separada)

Colunas de horário exibidas no mockup: 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00 (grade do período da Tarde).

### Cursos/categorias (linhas da tabela)

Cada curso tem um ícone, uma cor de destaque e uma "sala" associada:

| Curso | Sala | Cor | Ícone |
|---|---|---|---|
| Tecnologia | Sala 1 | Azul | Monitor |
| Gestão | Sala 2 | Laranja | Maleta |
| Saúde | Sala 3 | Verde | Coração/pulso |
| Criatividade | Sala 4 | Roxo | Lâmpada |
| Educação | Sala 5 | Rosa/Vermelho | Pessoas |

### Oficinas exibidas (exemplo de dados — período da Tarde)

**Tecnologia — Sala 1**
- Programação Web — 12:00 às 13:30
- Inteligência Artificial — 13:30 às 15:00
- Cibersegurança — 16:00 às 17:30

**Gestão — Sala 2**
- Marketing Digital — 12:00 às 13:00
- Empreendedorismo — 13:00 às 14:30
- Finanças Pessoais — 15:00 às 16:30
- Gestão de Projetos — 17:00 às 18:30

**Saúde — Sala 3**
- Enfermagem na Prática — 12:30 às 14:00
- Nutrição e Saúde — 14:15 às 15:45
- Primeiros Socorros — 16:00 às 17:30

**Criatividade — Sala 4**
- Design Thinking — 13:00 às 14:00
- Fotografia Criativa — 14:30 às 16:00
- Produção de Conteúdo — 16:30 às 18:00

**Educação — Sala 5**
- Metodologias Ativas — 12:00 às 13:30
- Educação Inclusiva — 13:45 às 15:15
- Tecnologias na Educação — 15:30 às 17:00
- Gamificação — 17:15 às 18:45


### Seletor de período (seção separada, conforme especificado no cronograma original)

Três blocos, um deles destacado como selecionado:

- **Manhã** — 8h às 12h
- **Tarde** — 12h às 18h *(destacado/selecionado no mockup)*
- **Noite** — 18h às 22h

Isso confirma o campo `periodo`: cada oficina pertence a um dos três períodos, e a tabela de horários exibida muda conforme o período selecionado pelo visitante.

---

## Resumo dos campos do sistema (Visitante → Cronograma de oficinas)

| Campo | Descrição | Origem no mockup |
|---|---|---|
| Nome Oficina | Nome da oficina | Título de cada bloco colorido |
| Curso | Categoria/área da oficina | Nome da linha (Tecnologia, Gestão, Saúde, Criatividade, Educação) |
| Sala | Local da oficina | Subtítulo abaixo do curso |
| Período | Manhã, Tarde ou Noite | Seletor inferior da tela |
| Horário de início | Início da oficina | Início do bloco na grade |
| Horário de término | Término da oficina | Fim do bloco na grade |
