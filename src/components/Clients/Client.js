import './Client.css'
import logo from '../Images/logosushi.jpg'
function ClientPage() {
  return (
    <div className="clientPageContainer">
      <header className="headerClientPage"> <div className="logoContainer"><p className="logoName">SUSHI <br/> QUEEN</p><img src={logo} className="logoHeader"/></div> <a href="/cocina" className="headerButton">COCINA</a></header>
        <h1>Página de cliente</h1>
    </div>
  );
}

export default ClientPage;
