import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditng, setIsEditing] = useState(false);
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startedEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditng && (
                <button onClick={startedEditingHandler}>Add New Expense</button>
            )}
            {isEditng && (
                <ExpenseForm
                    onSaveExpenseData={SaveExpenseDataHandler}
                    onCancel={stopEditingHandler} 
                />
            )}
        </div>
    );
};

export default NewExpense;