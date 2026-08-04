## Sistemas

### Visitante

- Tela de Cadastro
    - dados do visitante
        - Nome Completo
        - Primeira vez no Senac (Sim/Não)
        - Data/Hora do Cadastro (automático)
        - Período detectado (automático)

---

### Fluxo de dados

| Campo | Tipo | Obrigatório | Armazenamento |
|---|---|---|---|
| Nome Completo | String | Sim | localStorage |
| Primeira Vez | Boolean | Sim | localStorage |
| Data/Hora Cadastro | ISO String | Automático | localStorage |
| Período | String | Automático | localStorage |

- **Período** detectado pelo horário de acesso: Manhã (8–12h), Tarde (12–18h), Noite (18–22h)
- Armazenado em `localStorage` na chave `userData`, formato JSON:

```json
{
  "fullName": "João Silva",
  "isFirstTime": true,
  "registeredAt": "2026-08-04T22:44:50.000Z",
  "period": "afternoon"
}
```


