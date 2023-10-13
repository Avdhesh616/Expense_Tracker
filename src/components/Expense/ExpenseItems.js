import React from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';
function ExpenseItems(props) {
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () =>{
    //     setTitle('updated');
    //     console.log(title);
    // }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>₹{props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItems;