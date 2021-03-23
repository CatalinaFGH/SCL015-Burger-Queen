import logo from '../Images/logosushi.jpg';

function Home() {
    return (
        <div className="welcome-page-container">
           <div className="elements-container">
              <img src={logo} alt="logo" className="logo-sushi"/>
              <h1 className="title">SUSHI<br></br>QUEEN</h1>
           <div className="buttons-container">
              <a href="/cliente"><button className="welcome-page-client-button">CLIENTE</button></a>
              <a href="/cocina"><button className="welcome-page-kitchen-button">COCINA</button></a>
           </div>
           </div>
        </div>
    );
}

export default Home;