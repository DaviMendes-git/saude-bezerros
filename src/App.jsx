import { useState } from 'react'
import './App.css'

function App() {
  const [pagina, setPagina] = useState('Início')
  const [atendimentos, setAtendimentos] = useState([])
  const [ajudaAberta, setAjudaAberta] = useState(false);

  const menu = [
    'Início',
    'Unidades de Saúde',
    'Consultas',
    'Meus Atendimentos',
    'Exames',
    'Profissionais',
    'Relatórios',
  ]

  const indicadores = [
    { titulo: 'Unidades de saúde', valor: '12', icone: '🏥' },
    { titulo: 'Consultas agendadas', valor: '148', icone: '📅' },
    { titulo: 'Profissionais', valor: '86', icone: '👨‍⚕️' },
    { titulo: 'Exames pendentes', valor: '24', icone: '🩺' },
  ]

  return (
    <div className="aplicacao">
      <aside className="menu-lateral">
        <div className="marca">
          <div className="marca-icone">+</div>
          <div>
            <h2>Saúde Bezerros</h2>
            <span>Gestão Municipal</span>
          </div>
        </div>

        <p className="menu-titulo">MENU PRINCIPAL</p>

        <nav>
          {menu.map((item) => (
            <button
              key={item}
              className={`item-menu ${pagina === item ? 'ativo' : ''}`}
              onClick={() => setPagina(item)}
            >
              <span>{{
                'Início': '⌂',
                'Unidades de Saúde': '🏥',
                Consultas: '▦',
                Exames: '♡',
                Profissionais: '♙',
                Relatórios: '▤',
              }[item]}</span>
              {item}
            </button>
          ))}
        </nav>

        <div className="rodape-menu">
          <span className="status-ponto"></span>
          Sistema demonstrativo
        </div>
      </aside>

      <main className="conteudo">
        <header className="cabecalho">
          <div>
            <span className="caminho">Saúde Bezerros / {pagina}</span>
            <h1>{pagina}</h1>
            <p>Acompanhe as informações da saúde municipal.</p>
          </div>
          <div className="perfil">
            <div className="avatar">A</div>
            <div>
              <strong>Administrador</strong>
              <span>Gestão de saúde</span>
            </div>
          </div>
        </header>

        {pagina === 'Início' ? (
          <>
            <section className="boas-vindas">
              <div>
                <span className="etiqueta">PAINEL MUNICIPAL</span>
                <h2>Bem-vindo à Saúde Bezerros</h2>
                <p>
                  Consulte os indicadores e acompanhe os serviços de saúde
                  do município em um só lugar.
                </p>
              </div>
              <div className="ilustracao-saude">✚</div>
            </section>

            <section className="secao">
              <div className="titulo-secao">
                <div>
                  <h2>Visão geral</h2>
                  <p>Resumo dos dados demonstrativos do sistema</p>
                </div>
                <span className="periodo">Dados de exemplo</span>
              </div>

              <div className="grade-indicadores">
                {indicadores.map((item) => (
                  <article className="cartao-indicador" key={item.titulo}>
                    <div className="icone-indicador">{item.icone}</div>
                    <p>{item.titulo}</p>
                    <strong>{item.valor}</strong>
                    <span className="indicador-legenda">
                      
                    </span>
                  </article>
                ))}
              </div>
            </section>

            <section className="secao">
              <div className="titulo-secao">
                <div>
                  <h2>Acesso rápido</h2>
                  <p>Escolha uma área para consultar</p>
                </div>
              </div>

              <div className="grade-acessos">
                {menu.slice(1).map((item) => (
                  <button
                    className="cartao-acesso"
                    key={item}
                    onClick={() => setPagina(item)}
                  >
                    <span className="acesso-icone">↗</span>
                    <strong>{item}</strong>
                    <span>Visualizar informações</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : pagina === 'Unidades de Saúde' ? (
          <section className="painel-pagina">
            <h2>Unidades de Saúde</h2>
            <p>Consulte as unidades cadastradas na demonstração.</p>

            <div className="grade-indicadores">
              {[
                { nome: 'UBS Centro', endereco: 'Centro' },
                { nome: 'UBS São Pedro', endereco: 'São Pedro' },
                { nome: 'UBS Santo Amaro', endereco: 'Santo Amaro' },
              ].map((unidade) => (
                <article className="cartao-indicador" key={unidade.nome}>
                  <div className="icone-indicador">🏥</div>
                  <h3>{unidade.nome}</h3>
                  <p>Bairro: {unidade.endereco}</p>
                  <span className="indicador-legenda">
                    
                  </span>
                </article>
              ))}
            </div>

            <button
              className="botao-voltar"
              onClick={() => setPagina('Início')}
            >
              Voltar ao início
            </button>
          </section>
        ) : pagina === 'Consultas' ? (
          <section className="painel-pagina">
            <h2>Agendar consulta</h2>
            <p>Preencha os dados para simular um agendamento.</p>

            <form
              onSubmit={(evento) => {
  evento.preventDefault()

  const formulario = evento.currentTarget
  const dados = new FormData(formulario)

  const novoAtendimento = {
    id: Date.now(),
    nome: dados.get('nome'),
    especialidade: dados.get('especialidade'),
    data: dados.get('data'),
    horario: dados.get('horario'),
    status: 'Solicitado',
  }

  setAtendimentos((lista) => [...lista, novoAtendimento])

  alert('Agendamento simulado com sucesso!')
  formulario.reset()
}}
            >
              <label>Nome do cidadão</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                required
              />

              <label>Especialidade</label>
              <select name="especialidade" required defaultValue="">
                <option value="" disabled>
                  Selecione uma especialidade
                </option>
                <option>Clínico geral</option>
                <option>Pediatria</option>
                <option>Ginecologia</option>
                <option>Odontologia</option>
              </select>

              <label>Data desejada</label>
              <input type="date" name="data" required />

              <label>Horário desejado</label>
              <select name="horario" required defaultValue="">
                <option value="" disabled>
                  Selecione um horário
                </option>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>14:00</option>
                <option>15:00</option>
              </select>

              <button className="botao-voltar" type="submit">
                Simular agendamento
              </button>
            </form>
          </section>
          ) : pagina === 'Meus Atendimentos' ? (
          <section className="painel-pagina">
            <h2>Meus Atendimentos</h2>
            <p>Acompanhe o histórico dos seus agendamentos.</p>

            {atendimentos.length === 0 ? (
              <p>Você ainda não possui atendimentos cadastrados.</p>
            ) : (
              <div className="grade-indicadores">
                {atendimentos.map((atendimento) => (
                  <article
                    className="cartao-indicador"
                    key={atendimento.id}
                  >
                    <div className="icone-indicador">📅</div>
                    <h3>{atendimento.especialidade}</h3>
                    <p>Nome: {atendimento.nome}</p>
                    <p>Data: {atendimento.data}</p>
                    <p>Horário: {atendimento.horario}</p>
                    <strong>Status: {atendimento.status}</strong>
                  </article>
                ))}
              </div>
            )}

            <button
              className="botao-voltar"
              onClick={() => setPagina('Início')}
            >
              Voltar ao início
            </button>
          </section>
) : pagina === 'Exames' ? (
          <section className="painel-pagina">
            <h2>Acompanhamento de exames</h2>
            <p>Consulte o andamento dos exames na demonstração.</p>

            <div className="grade-indicadores">
              {[
                {
                  nome: 'Hemograma completo',
                  status: 'Solicitado',
                  data: '12/10/2026',
                },
                {
                  nome: 'Glicemia em jejum',
                  status: 'Confirmado',
                  data: '15/10/2026',
                },
                {
                  nome: 'Colesterol total',
                  status: 'Realizado',
                  data: '10/10/2026',
                },
              ].map((exame) => (
                <article className="cartao-indicador" key={exame.nome}>
                  <div className="icone-indicador">🩺</div>
                  <h3>{exame.nome}</h3>
                  <p>Data: {exame.data}</p>
                  <strong>{exame.status}</strong>
                  <span className="indicador-legenda">
                    
                  </span>
                </article>
              ))}
            </div>

            <button
              className="botao-voltar"
              onClick={() => setPagina('Início')}
            >
              Voltar ao início
            </button>
          </section>
        ) : pagina === 'Profissionais' ? (
          <section className="painel-pagina">
            <h2>Profissionais de Saúde</h2>
            <p>Consulte os profissionais cadastrados na demonstração.</p>

            <div className="grade-indicadores">
              {[
                {
                  nome: 'Ana Silva',
                  especialidade: 'Clínica geral',
                  unidade: 'UBS Centro',
                },
                {
                  nome: 'Carlos Santos',
                  especialidade: 'Pediatria',
                  unidade: 'UBS São Pedro',
                },
                {
                  nome: 'Mariana Costa',
                  especialidade: 'Odontologia',
                  unidade: 'UBS Santo Amaro',
                },
              ].map((profissional) => (
                <article
                  className="cartao-indicador"
                  key={profissional.nome}
                >
                  <div className="icone-indicador">👨‍⚕️</div>
                  <h3>{profissional.nome}</h3>
                  <p>Especialidade: {profissional.especialidade}</p>
                  <p>Unidade: {profissional.unidade}</p>
                  <span className="indicador-legenda">
                    
                  </span>
                </article>
              ))}
            </div>

            <button
              className="botao-voltar"
              onClick={() => setPagina('Início')}
            >
              Voltar ao início
            </button>
          </section>
        ) : pagina === 'Relatórios' ? (
          <section className="painel-pagina">
            <h2>Relatórios da Saúde Municipal</h2>
            <p>Indicadores ilustrativos para apoiar a gestão.</p>

            <div className="grade-indicadores">
              <article className="cartao-indicador">
                <div className="icone-indicador">📅</div>
                <p>Agendamentos nesta sessão</p>
                <strong>{atendimentos.length}</strong>
                <span className="indicador-legenda">
                  
                </span>
              </article>

              <article className="cartao-indicador">
                <div className="icone-indicador">🩺</div>
                <p>Exames pendentes</p>
                <strong>2</strong>
                <span className="indicador-legenda">
                  
                </span>
              </article>

              <article className="cartao-indicador">
                <div className="icone-indicador">🏥</div>
                <p>Unidades demonstrativas</p>
                <strong>3</strong>
                <span className="indicador-legenda">
                  
                </span>
              </article>
            </div>

            <h3>Distribuição dos atendimentos</h3>

            <div className="grade-indicadores">
              {[
                {
                  status: 'Solicitado',
                  quantidade: atendimentos.filter(
                    (item) => item.status === 'Solicitado'
                  ).length,
                },
                {
                  status: 'Confirmado',
                  quantidade: 0,
                },
                {
                  status: 'Realizado',
                  quantidade: 0,
                },
              ].map((item) => (
                <article className="cartao-indicador" key={item.status}>
                  <p>{item.status}</p>
                  <strong>{item.quantidade}</strong>
                </article>
              ))}
            </div>

            <button
              className="botao-voltar"
              onClick={() => setPagina('Início')}
            >
              Voltar ao início
            </button>
          </section>
        ) : (
          <section className="painel-pagina">
            <div className="painel-icone">▤</div>
            <h2>{pagina}</h2>
            <p>
              Esta área faz parte da demonstração da plataforma Saúde
              Bezerros.
            </p>
            <p>
              Os dados são ilustrativos e não estão conectados aos sistemas
              municipais nem a um banco de dados.
            </p>
            <button
              className="botao-voltar"
              onClick={() => setPagina('Início')}
            >
              Voltar ao início
            </button>
          </section>
        )}
        <div className="ajuda-chat">
          <button
            className="botao-voltar"
            onClick={() => setAjudaAberta(!ajudaAberta)}
          >
            {ajudaAberta ? 'Fechar ajuda' : 'Ajuda'}
          </button>

          {ajudaAberta && (
            <section className="painel-pagina">
              <h3>Como podemos ajudar?</h3>
              <p>Escolha uma opção:</p>

              <button className="botao-voltar" onClick={() => { setPagina('Consultas'); setAjudaAberta(false); }}>
                Agendar consulta
              </button>

              <button className="botao-voltar" onClick={() => { setPagina('Meus Atendimentos'); setAjudaAberta(false); }}>
                Meus atendimentos
              </button>

              <button className="botao-voltar" onClick={() => { setPagina('Exames'); setAjudaAberta(false); }}>
                Consultar exames
              </button>

              <button className="botao-voltar" onClick={() => { setPagina('Unidades de Saúde'); setAjudaAberta(false); }}>
                Unidades de saúde
              </button>
            </section>
          )}
        </div>

        <footer className="rodape">
          Saúde Bezerros · Projeto acadêmico demonstrativo
        </footer>
      </main>
    </div>
  )
}

export default App