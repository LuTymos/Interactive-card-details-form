import './Card.css'

export default function Card() {
    return (
        <div className="Card">
            <div className="card_box">
                <div className="behind_card">
                    <span className="cvv">123</span>
                </div>
                <div className="front_card">
                    <img src="..\src\assets\img\card-logo.svg" alt="" className="logo_card" />
                    <div className="card_information">
                        <div className="number_card"><span>0000 </span><span>0000 </span> <span>0000 </span> <span>0000 </span></div>
                        <span>Jane Appleseed</span>
                        <span>00/00</span>
                    </div>
                </div>
            </div>

        </div>
    )
}