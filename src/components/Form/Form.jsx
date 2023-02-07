import './Form.css'
import InputMask from 'react-input-mask';
import { useState } from 'react';

export default function Form(props) {

    const { handleName } = props.handleName
    const { handleNumber } = props.handleNumber
    const { handleMonth } = props.handleMonth
    const { handleYear } = props.handleYear
    const { handleCvv } = props.handleCvv

    const [emptyName, setEmptyName] = useState(true)
    const [emptyNumber, setEmptyNumber] = useState(true)
    const [emptyMonth, setEmptyMonth] = useState(true)
    const [emptyYear, setEmptyYear] = useState(true)
    const [emptyYearMonth, setEmptyYearMonth] = useState(true)
    const [emptyCvv, setEmptyCvv] = useState(true)
    const [invalid, setInvalid] = useState(true)

    const changeName = (e) => {
        if (e.target.value == '') {
            setEmptyName(false)
        } else {
            setEmptyName(true)
        }

        handleName(e.target.value)
    }

    const changeNumber = (e) => {
        if (e.target.value == '') {
            setEmptyNumber(false)
        } else {
            setEmptyNumber(true)
        }
        handleNumber(e.target.value)
    }

    const changeMonth = (e) => {
        if (e.target.value == '') {
            setEmptyMonth(false)
        } else {
            if (e.target.value >= 13) {
                setInvalid(false)
            } else {
                setInvalid(true)
            }
            setEmptyMonth(true)
        }
        handleMonth(e.target.value)
    }

    const changeYear = (e) => {
        if (e.target.value == '') {
            setEmptyYear(false)
        } else {
            if (e.target.value < 23) {
                setInvalid(false)
            } else {
                setInvalid(true)
            }
            setEmptyYear(true)
        }
        handleYear(e.target.value)
    }

    const changeCvv = (e) => {
        if (e.target.value == '') {
            setEmptyCvv(false)
        } else {

            setEmptyCvv(true)
        }
        handleCvv(e.target.value)
    }

    const submitAction = (e)=>{
        e.preventDefaul()
    }




    return (
        <div className="Form">

            <form action="">

                <div className="input_name">
                    <label htmlFor="name">cardholder name</label>
                    <input maxLength='18' type="text" onChange={(e) => { changeName(e) }}
                        className={emptyName == false ? 'error_input' : ''} placeholder='e.g. Jane Appleseed' />
                    {emptyName == false ? <span className="error1">Can't be blank</span> : ''}

                </div>

                <div className="input_cardnumber">
                    <label htmlFor="card_number">card number</label>
                    <InputMask
                        onChange={(e) => { changeNumber(e) }}
                        className={emptyNumber == false ? 'error_input input' : 'input'} id='card_number'
                        mask="9999 9999 9999 9999"
                        maskChar=''
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                    {emptyNumber == false ? <span className="error1">Can't be blank</span> : ''}
                </div>

                <div className="input_group">
                    <div className="input_date">
                        <label htmlFor="">exp. Date (MM/YY)</label>
                        <InputMask
                            onChange={(e) => { changeMonth(e) }}
                            className={!emptyMonth || invalid == false ? 'error_input input' : 'input'}
                            mask="99"
                            maskChar=''
                            placeholder='MM'
                        />
                        <InputMask
                            onChange={(e) => { changeYear(e) }}
                            className={!emptyYear || invalid == false ? 'error_input input' : 'input'}
                            mask="99"
                            maskChar=''
                            placeholder='YY'
                        />
                        {!emptyMonth || emptyYear === false ? <span className="error1">Can't be blank</span> : ''}
                        {invalid === false ? <span className="error1">Invalid Month/Year</span> : ''}
                    </div>
                    <div className="input_cvv">
                        <label htmlFor="cvc">cvc</label>
                        <InputMask
                            onChange={(e) => { changeCvv(e) }}
                            className={emptyCvv == false ? 'error_input input' : 'input'} id='cvc'
                            mask="999"
                            maskChar=''
                            placeholder='e.g. 123'
                        />
                        {emptyCvv == false ? <span className="error1">Can't be blank</span> : ''}
                    </div>
                </div>
                <button type="submit" onClick={(e)=>{submitAction(e)}} className='confirm'>Confirm</button>
            </form>
        </div>
    )
}