import "./styles/footerbuttons.css"

function FooterButtons(props) {
    return (
        <div className="footerButtons">
          <button className="footerButtonsReset" onClick={() => {props.onReset()}}>Reiniciar</button>
        </div>
      );
  }

export default FooterButtons;