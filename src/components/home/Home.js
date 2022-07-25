import Logo from "./../../assets/images/logo.png";
import "./style-home.css";

function Home({ setVisible }) {
  return (
    <div className="home">
      <img src={Logo} alt="Zap Recall!" />
      <h1>ZapRecall</h1>
      <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
    </div>
  );
}

export default Home;
