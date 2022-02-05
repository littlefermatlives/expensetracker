import { date } from 'check-types';
import ExpenseDate from './ExpenseDate.js';
import card from './card.js';
import './ExpenseItem.css';
function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description">
                <h2>
                    {props.title}
                </h2>
                <div className="expense-item__price"> {props.amount} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;