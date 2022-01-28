import "./styles/footerbuttons.css"

function FooterButtons(props) {
    return (
        <div className="footerButtons">
        <button className="footerButton" onClick={() => {props.onShowRanking()}}>Ránquing</button>
        <button className="footerButton" onClick={() => {props.onReset()}}>Reiniciar</button>
        </div>
      );
  }

export default FooterButtons;