

import '../conteudo.css'


function Presenca() {
  
  return (
    <div className='Home'>
      <div id='barra_menu_TelaInicial'>
      <div id='icone_home'>
          <a href="Home"><img src="imagens/icone_home.png" alt="" /></a>
        </div>
        
      <div id='perfil_home'>

          <div id='imagens_menu_Humburguer'>
          <div className="hamburger-container">
            <input className="checkbox" type="checkbox" id="hamburger-toggle" aria-label="Toggle Navigation"/>
            <label className="hamburger" htmlFor="hamburger-toggle">
            <img id='perfil' src="imagens/perfil.png" alt="" />
            </label>

            <div className="drawer">
            <label className="hamburger" htmlFor="hamburger-toggle">
            <img id='perfil2' src="imagens/perfil.png" alt="" />
            </label>
              <ul className="nav-list">
                <li className="nav-list-item"><a href="#"><img id='icones' src="imagens/icone_config.png" alt=""/> Configuração</a></li><br/>
                <li className="nav-list-item"><a href="/"><img id='icones' src="imagens/icone_sair.png" alt=""/> Sair</a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
 
      </div>
      <div id='iconHome'>
          <img src="imagens/iconHome.png" alt="" />
      </div>
      
    <div id="calendario_presenca">
    <div className="month">      
  <ul>

  <li>
          novembro<br/>
        </li>
      </ul>
    </div>
    
    <ul className="weekdays">
      <li>seg</li>
      <li>Ter</li>
      <li>quart</li>
      <li>quint</li>
      <li>sex</li>
      <li>Sab</li>
      <li>domi</li>
    </ul>

<ul className="days">  
  <li>1</li>
  <li><span className="active">2</span></li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li><span className="active">6</span></li>
  <li>7</li>
  <li><span className="active">8</span></li>
  <li>9</li>
  <li><span className="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li><span className="active">14</span></li>
  <li>15</li>
  <li><span className="active">16</span></li>
  <li><span className="active">17</span></li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li><span className="active">24</span></li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>

    </div>
    </div>
  )

  
}

export default Presenca