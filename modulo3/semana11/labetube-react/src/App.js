import logo from './logo.svg';
import './App.css';
import home from './img/home.png'
import explore from './img/compass.png'
import subscription from './img/renew.png'
import library from './img/library.png'

function App() {
    
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="App">
      <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav class="menu-vertical">
                
                <div className="menu-items">
                    <img className="icon-menu" src={home} />
                    <p class="botoes-meunu-vertical">Início</p>
                </div>

                <div className="menu-items">
                    <img className="icon-menu" src={explore} />
                    <p class="botoes-meunu-vertical">Em alta</p>
                </div>

                <div className="menu-items">
                    <img className="icon-menu" src={subscription} />
                    <p class="botoes-meunu-vertical">Inscrições</p>
                </div>

                <div className="menu-items">
                    <img className="icon-menu" src={library} />
                    <p class="botoes-meunu-vertical">Originais</p>
                </div>   

                    <hr/>

                <div className="menu-items">
                    <img className="icon-menu" src="" />
                    <p class="botoes-meunu-vertical">Histórico</p>
                </div>
    
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
