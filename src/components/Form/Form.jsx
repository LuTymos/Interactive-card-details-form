import './Form.css'
import InputMask from 'react-input-mask';

export default function Form(props) {

    


    return (
        <div className="Form">

            <form action="">

                <div className="input_name">
                    <label htmlFor="name">cardholder name</label>
                    <input type="text" className='' placeholder='e.g. Jane Appleseed' />
                    <span className="error1">Can't be blank</span>
                </div>

                <div className="input_cardnumber">
                    <label htmlFor="card_number">card number</label>
                    <InputMask
                        onChange={(e) => { props.handleNumber.handleNumber(e.target.value) }} 
                        className='input' id='card_number'
                        mask="9999 9999 9999 9999"
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                    <span className="error1">Can't be blank</span>
                </div>

                <div className="input_group">
                    <div className="input_date">
                        <label htmlFor="">exp. Date (MM/YY)</label>
                        <InputMask
                            onChange={(e) => { props.handleMonth.handleMonth(e.target.value) }} 
                            className='input'
                            mask="99"
                            placeholder='MM'
                        />
                        <InputMask
                            onChange={(e) => { props.handleYear.handleYear(e.target.value) }} 
                            className='input'
                            mask="99"
                            placeholder='YY'
                        />
                        <span className="error1">Can't be blank</span>
                    </div>
                    <div className="input_cvv">
                        <label htmlFor="cvc">cvc</label>
                        <InputMask
                            onChange={(e) => { props.handleCvv.handleCvv(e.target.value) }} 
                            className='input' id='cvc'
                            mask="999"
                            placeholder='e.g. 123'
                        />
                        <span className="error1">Can't be blank</span>
                    </div>
                </div>
                <button type="submit" className='confirm'>Confirm</button>
            </form>
        </div>
    )
}