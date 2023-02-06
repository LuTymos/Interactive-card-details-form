import './Card.css'

export default function Card(props) {
    return (
        <div className="Card">
            <div className="card_box">
                <div className="behind_card">
                    <span className="cvv">{props.cvv}</span>
                </div>
                <div className="front_card">
                    <img src="../../src/assets/img/card-logo.svg" alt="" className="logo_card" />
                    <div className="card_information">
                        <div className="number_card"><span>{props.number}</span></div>
                        <span>{props.name}</span>
                        <span>{props.month}/{props.year}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}