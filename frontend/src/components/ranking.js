import "./styles/ranking.css"
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

function Ranking(props) {

    return (
        <div className={"ranking" + (props.loading ? " loading" : "")}>
            <button className="closeButton" onClick={() => props.onClose()}><i className="fas fa-times"></i></button>
            {props.loading ? <span className="loader">Loading...</span> : null}
            <table>
                <thead>
                    <tr>
                        <th>Jugador</th>
                        <th>Victorias</th>
                        <th>Empates</th>
                        <th>Derrotas</th>
                    </tr>
                </thead>
                <tbody>
                {props.ranking.map(r => {
                    return <tr key={r.id}>
                        <td>{r.player}</td>
                        <td>{r.victories}</td>
                        <td>{r.draws}</td>
                        <td>{r.losses}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
      );
  }

export default Ranking;