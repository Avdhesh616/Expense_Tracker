import React from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 8, 12)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 785.22,
      date: new Date(2023, 7, 22)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 124.22,
      date: new Date(2023, 8, 5)
    },
    {
      id: 'e4',
      title: 'New Desk(Wooden)',
      amount: 455,
      date: new Date(2023, 8, 1)
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
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
}

export default App;
