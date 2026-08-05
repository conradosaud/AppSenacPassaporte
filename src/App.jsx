import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estados globais do aplicativo
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [exibirModal, setExibirModal] = useState(false);
  const [telaAtiva, setTelaAtiva] = useState('boas-vindas');

  // Estados do formulário de cadastro parcial
  const [nomeVisitante, setNomeVisitante] = useState('');
  const [ehPrimeiraVez, setEhPrimeiraVez] = useState(null); // Iniciado como null para forçar seleção
  const [mensagemErro, setMensagemErro] = useState('');

  // Verifica se o usuário já possui cadastro local ao inicializar o app
  useEffect(() => {
    const dadosLocais = localStorage.getItem('userData');
    if (dadosLocais) {
      try {
        const usuarioDados = JSON.parse(dadosLocais);
        if (usuarioDados && usuarioDados.fullName) {
          setUsuarioLogado(usuarioDados);
          setTelaAtiva('cronograma');
        } else {
          setTelaAtiva('boas-vindas');
        }
      } catch (erro) {
        // Se houver algum erro de parseamento, limpa o estado
        setTelaAtiva('boas-vindas');
      }
    } else {
      setTelaAtiva('boas-vindas');
    }
    setCarregando(false);
  }, []);

  // Garante o bloqueio de segurança: se estiver no cronograma mas não houver usuário, volta para a tela inicial
  useEffect(() => {
    if (telaAtiva === 'cronograma' && !usuarioLogado && !carregando) {
      setTelaAtiva('boas-vindas');
    }
  }, [telaAtiva, usuarioLogado, carregando]);

  // Função para detectar o período baseado no horário do dispositivo do visitante
  const obterPeriodoAtual = () => {
    const dataAtual = new Date();
    const horaAtual = dataAtual.getHours();

    // Regras de período: Manhã (8-12h), Tarde (12-18h), Noite (18-22h e outros)
    if (horaAtual >= 8 && horaAtual < 12) {
      return 'morning';
    } else if (horaAtual >= 12 && horaAtual < 18) {
      return 'afternoon';
    } else {
      return 'night';
    }
  };

  // Executa o salvamento do cadastro parcial localmente
  const salvarCadastro = (evento) => {
    evento.preventDefault();

    // Validação de nome preenchido
    if (nomeVisitante.trim() === '') {
      setMensagemErro('Por favor, insira seu nome completo.');
      return;
    }

    // Validação de seleção obrigatória de primeira vez
    if (ehPrimeiraVez === null) {
      setMensagemErro('Por favor, marque se é sua primeira vez no Senac.');
      return;
    }

    const novoUsuario = {
      fullName: nomeVisitante.trim(),
      isFirstTime: ehPrimeiraVez,
      registeredAt: new Date().toISOString(),
      period: obterPeriodoAtual()
    };

    // Grava no localStorage conforme regras de persistência
    localStorage.setItem('userData', JSON.stringify(novoUsuario));
    setUsuarioLogado(novoUsuario);
    setMensagemErro('');
    setExibirModal(false);
    setTelaAtiva('cronograma');
  };

  // Exibe tela de carregamento suave
  if (carregando) {
    return (
      <div className="body anim-fade" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#94a3b8' }}>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* TELA DE BOAS-VINDAS */}
      {telaAtiva === 'boas-vindas' && (
        <div className="tela-boas-vindas anim-fade">
          <div className="logo-container">
            <div className="decoracao-brilho"></div>
            <h2 className="logo-texto">SENAC</h2>
            <span className="evento-tag">Casa Aberta</span>
          </div>

          <div className="boas-vindas-conteudo">
            <h1 className="boas-vindas-titulo">
              Bem-vindo ao <span>Passaporte Virtual</span>!
            </h1>
            <p className="boas-vindas-descricao">
              Descubra oficinas, monte sua programação personalizada e registre sua participação nas atividades do evento.
            </p>
          </div>

          <button className="btn-principal" onClick={() => setExibirModal(true)}>
            Ver oficinas
          </button>
        </div>
      )}

      {/* TELA DO CRONOGRAMA (Apenas um H1 com o nome do usuário) */}
      {telaAtiva === 'cronograma' && usuarioLogado && (
        <h1 className="cronograma-simples anim-fade">
          {usuarioLogado.fullName}
        </h1>
      )}

      {/* MODAL DE CADASTRO */}
      {exibirModal && (
        <div className="modal-overlay" onClick={() => setExibirModal(false)}>
          <div className="modal-content" onClick={(evento) => evento.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-titulo">Cadastro Rápido</h3>
              <button className="btn-fechar" onClick={() => setExibirModal(false)}>
                &times;
              </button>
            </div>

            <form onSubmit={salvarCadastro}>
              <div className="form-grupo">
                <label className="form-label" htmlFor="nome-completo">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome-completo"
                  className="input-texto"
                  placeholder="Ex: João da Silva"
                  value={nomeVisitante}
                  onChange={(evento) => {
                    setNomeVisitante(evento.target.value);
                    if (mensagemErro) setMensagemErro('');
                  }}
                  autoFocus
                />
                {mensagemErro && mensagemErro.includes('nome') && <span className="erro-mensagem">{mensagemErro}</span>}
              </div>

              <div className="form-grupo">
                <label className="form-label">
                  É sua primeira vez aqui no Senac?
                </label>
                <div className="grupo-radio">
                  <label className="opcao-radio">
                    <input
                      type="radio"
                      name="primeira-vez"
                      checked={ehPrimeiraVez === true}
                      onChange={() => {
                        setEhPrimeiraVez(true);
                        if (mensagemErro) setMensagemErro('');
                      }}
                    />
                    <span>Sim</span>
                  </label>
                  <label className="opcao-radio">
                    <input
                      type="radio"
                      name="primeira-vez"
                      checked={ehPrimeiraVez === false}
                      onChange={() => {
                        setEhPrimeiraVez(false);
                        if (mensagemErro) setMensagemErro('');
                      }}
                    />
                    <span>Não</span>
                  </label>
                </div>
                {mensagemErro && mensagemErro.includes('primeira') && <span className="erro-mensagem">{mensagemErro}</span>}
              </div>

              <button type="submit" className="btn-principal" style={{ marginTop: '12px' }}>
                Concluir e Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
