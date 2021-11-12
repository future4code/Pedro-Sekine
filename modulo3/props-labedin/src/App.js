import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import {CardPequeno} from './components/CardPequeno/CardPequeno';
import { Competencias } from './components/Competencias';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U02BL224K0F-5d9cefd4978e-512" 
          nome="Pedro Sekine" 
          descricao="Oi 👋 é um prazer! Sou desenvolvedor Front End com sólido conhecimento em 
          Javascript, HTML e CSS. Atualmente, estou me aprofundando em React e devo admitir que apesar de um 
          grande desafio, é incrível. Sou formado em Relações Públicas e tenho experiência com relacionamento,
          treinamento e vendas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
        imagem="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1636671754~hmac=e503adfac18197445ddc383cab946d3b" 
        texto="sekine@email.com"
        />
      </div>

      <div>
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/535/535239.png"
        texto="Rua Viena, 8" 
        />
      </div>

      <div>
        <h2>Competências</h2>
        <Competencias 
          comp1="React"
          comp2="Javascript"
          comp3="CSS"
          comp4="HTML"
          comp5="Versionamento"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj" 
          nome="Labenu" 
          descricao="Faço parte do time de empregabilidade e meu papel é ajudar estudantes a conseguirem 
          bons empregos." 
        />
        
        <CardGrande 
          imagem="https://www.logo.wine/a/logo/WeWork/WeWork-Icon-Logo.wine.svg" 
          nome="WeWork " 
          descricao="Account Management Intern. Meu papel era auxiliar todo o time com suas apresentações e 
          vendas. Tive contato direto com clientes e também analisava métricas para ajudar o resto do time
          a tomar boas escolhas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande
        imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAC9vb3x8fGzs7PW1tbm5uaCgoLv7++lpaVTU1Pz8/PY2NgUFBSEhITT09Pe3t75+fkbGxtiYmKrq6vIyMgkJCR5eXk/Pz9paWkdHR0sLCzo6OhLS0u4uLhERESRkZFaWlqfn581NTWXl5dzc3NkZGQ4ODgLCwt1dXWqbHpcAAAEWUlEQVR4nO2b6VrqMBQAKVQERWRXBBFwf/8XvDYprtlOTGm938xPmtNk2jQLPW21AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAC5rmc2af40bxtZz4Ym+rsDJxBo7SGj1kEZexguPAWXW3XXytsL/3nv50Zr0wcV9GG3dvA0tPeR3Wz0Cq29RtuBeX7ZWWdZ0HQyXEMX4y/vsVdC9qaZUtV10AUk83cLZcY7oxHRqWLkfIBvJqfO8/eae90wd3hhFl2s/cMJd1+efa+u1wgheGZ8Yi64hYBfQevQsaD9Zkq+9o6183ehLRqfqHKzkPK+ogy3Irq76vSuboq96GD5JMKSjGkxhiuVe2D4Dry90frPrxhahp7DC9vJcZQzWi5oJLTg6HkntwXAWt/OR8RhuPMGmOjFGxLYrpFxFZUjZEIQ9XpZEsrPdGvZE2bugbzcCIMl7IHqmAcM/rPi5iuLMZAhOEiovfcye+7vixBk4uTCEPnONMzX/TTmB5XTIoP0iBj1RGGtrmwZxn+HmIMi6X9UBr0g0jDS/PZ1PjXMx+z0LOfbleToXo8LAt/PSmIFB2G0zoNLQuarlzxjxlGKDoMnyo2PIkxlCv27J2+6nvoNLRvwKWKf89QqthAw5azl7beFTthDXAY1vUcKsOVax8kUmyqYbZwnVSi2ETDk6SKTTRMq+gwXNZmWCo6N7TBinUbWlqYULFTn+HA1cBwRfdfxs01TKfYWMNkis01LBWdf0mFKDbYMJFikw3TKHoMT11nD+I3hkkUazQcBUxn+p3ns6uIT7HhhgkUm274e0VlaP43/LERhqXitauIU1EZXnxmUnDzxkszDMMVL4zHOpmTNIa3xiOhhuGKxkN/wbBMsnAq7mMNr0Ia4CSFYal45yjhMRz2LexFr42NJDH0K/bdhuFZD3LSGHoVZ25Dy6usJCQy9Cn+B4Yexbw+w6G1WQEr7y9oxan5YCMN1cZB8iZQKVrWZjX2Uruhg6JR+58/j+zr62IsfTEeqdxw65urDYxti42BdY9UVGP+T+e8akN797HT9S5hfvBkfUQrN1TjiTCVR6dTijIjiwBzakzlhqruV1nIRBlKcrg2do3qDYuhRpbkuCkXxYKQG3v56g3VGO/co39jfFj2h29stvZOegTD1pmwn35k6Ycm0bZdt/wIhur1VnC+8VgJLnRic9j3AjPn5TiCYZmGvQr6gkPfjqzbetVrNP+q7nzqWs0dx/Dw+ctd7hlwurOVLllkJpadddl2Sl6WX6zYl03jYxjq3MhwdOrlThCx0y6Tyfv/aDcLzWpyFEOdcBzI6nCn98Eh5RrWXqB6w3JaDOHT6LLeBUXsDhuUeg1b4/6dv7Fn39KuR0Pzp1+fOP1YEtZsWHDSzvN8U2D+ItQU09NfoW6MYZdf9pcz60epvpf9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCYf43GONEGGsiRAAAAAElFTkSuQmCC"
        nome="Universidade de São Paulo"
        descricao="Bacharelado em Relações Públicas entre 2016 e 2021"
        />

        <CardGrande 
        imagem="https://yt3.ggpht.com/ytc/AKedOLT-G8uanCI9fGsB88m9GWUNMbDucqBfPaOuUT9TBg=s900-c-k-c0x00ffffff-no-rj"
        nome="Newcastle University"
        descricao="Bachelor of Arts - Combined Honors. Cursei disciplinas em Empreendedorismo, Educação em Países Emergentes e língua Alemã"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
