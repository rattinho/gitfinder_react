import Header from "../../components/Header";
import background from '../../assets/background.png'
import ItemList from "../../components/ItemList";

import { useState } from "react";

import styled from "styled-components";



function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  async function handleGetData() {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json()

      if (newRepos.length) {
        setRepos(newRepos)
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <Conteudo>
        <Info>
          <div>
            <input name="usuario" value={user} onChange={event => setUser(event.target.value)} placeholder="@username" />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
            <Perfil>
              <img src={currentUser.avatar_url} alt="" />
              <div>
                <h3>{currentUser.name}</h3>
                <span>{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </Perfil>
            <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <Repositorio>
                Repositórios
              </Repositorio>
              {repos.map((repo)=>{
                return(
                  <ItemList title={repo.name} description={repo.description} />
                )
              })}
            </div>
          ) : null}
        </Info>
        <img className="background-img" src={background} alt="background APP" />
      </Conteudo>
    </div>
  );
}

export default App;

const Repositorio = styled.div`
  font-size: 32px;
  color: #FFFFFF;
  margin: 12px 0;
  text-align: center;
`;

const Perfil = styled.div`
  display: flex;
  margin: 40px 0px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
    margin-right: 32px;
  }

  div{
    h3{
      color: #999999;
      font-size: 24px;
      margin: 0
    } 

    p {
      color: #999999;
      font-size: 12px;
      margin: 0;
      display: block;
      margin: 20px 0 0 0;
    }

    span {
      color: #999999;
      font-size: 12px;
      margin: 0;
      display: block;
    }
  }

`;

const Info = styled.div`
  width: 60%;
  margin-right: 90px;
  margin-top: 40px;
  color: white;
`;

const Conteudo = styled.div`
  position: relative;
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;

  input{
    border-radius: 24px;
    border: 1px solid #999999;
    background: transparent;
    font-size: 18px;
    padding: 10px;
    width: 60%;
    margin-right: 12px;
  }

  button {
    border-radius: 100px;
    border: 1px solid #999999;
    background: #2D333B;
    font-size: 18px;
    padding: 10px;
    width: calc(30% + 12px);
    color: #999999;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  button:hover{
    background: #999999;
    color: #2D333B;
  }

  .background-img {
    height: 100vh;
    filter: blur(5px);
    position:absolute;
    left:0;
    transition: all 0.2s ease-in-out;
    z-index: -1;
  }
  
  .background-img:hover{
    filter: blur(2px);
  }
`;

