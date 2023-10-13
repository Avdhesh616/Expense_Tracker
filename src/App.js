import React, {useState} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Table cloth',
    amount: 300,
    date: new Date(2022, 8, 12)
  },
  {
    id: 'e2',
    title: 'Diary',
    amount: 220.5,
    date: new Date(2022, 7, 22)
  },
  {
    id: 'e3',
    title: 'Phone EMI',
    amount: 1244,
    date: new Date(2022, 8, 5)
  },
  {
    id: 'e4',
    title: 'Earphones',
    amount: 455,
    date: new Date(2022, 8, 1)
  },
];
const App = () =>{
  
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );

  // return React.createElement('div',{},
  // React.createElement('h2',{},"Let get going"),
  // React.createElement(Expenses,{items : expenses})
  // );
};

export default App;
