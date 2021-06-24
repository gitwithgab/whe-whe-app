import React from 'react'
import Modal from "../components/Modal"
import CashierSummary from "../components/CashierSummary"
import CashierKeypad from "../components/CashierKeypad"

const CashPage = () => {
    return (
        <div>
            <Modal />
            <CashierSummary />
            <CashierKeypad />
        </div>
    )
}

export default CashPage
