import React, { useEffect, useReducer, useState } from "react";
import ExpenseStyles from "../css/expense.module.css";
const ExpenseTracker = () => {
  let [money, setMoney] = useState({ moneyValue: "", moneyType: "" });
  let [total, setTotal] = useState(0);

  function takeValue({ target: { name, value } }) {
    setMoney({ ...money, [name]: value });
  }

  let initialState = {
    expenditure: "0",
    savings: "0",
    transactions: [],
  };
  function reducerfunction(state, { type, payload }) {
    console.log(state);
    switch (type) {
      case "succesfull":
        if (payload.moneyType === "expense")
          return {
            ...state,
            expenditure: String(
              parseInt(payload.moneyValue) + parseInt(state.expenditure)
            ),
            transactions: [...state.transactions, payload],
          };
        if (payload.moneyType === "saving")
          return {
            ...state,
            savings: String(
              parseInt(payload.moneyValue) + parseInt(state.savings)
            ),
            transactions: [...state.transactions, payload],
          };
    }
  }

  let [reducerState, dispatch] = useReducer(reducerfunction, initialState);

  function submitData(e) {
    e.preventDefault();
    if (money.moneyValue && money.moneyType) {
      dispatch({ type: "succesfull", payload: money });
      setMoney({ ...money, moneyValue: "" });
    }
  }
  useEffect(() => {
    let totalExpenditure = reducerState.transactions
      .filter(({ moneyType }) => {
        return moneyType === "expense";
      })
      .map(({ moneyValue }) => Number(moneyValue))
      .reduce((a, b) => {
        return a + b;
      }, 0);
    console.log(totalExpenditure);

    let totalSavings = reducerState.transactions
      .filter(({ moneyType }) => {
        return moneyType === "saving";
      })
      .map(({ moneyValue }) => Number(moneyValue))
      .reduce((a, b) => {
        return a + b;
      }, 0);
    setTotal(totalSavings - totalExpenditure);
    console.log(totalSavings);
  }, [reducerState]);
  return (
    <div>
      <div>
        <h1 className={ExpenseStyles.heading}>Expense Tracker</h1>
        <form onSubmit={submitData} className={ExpenseStyles.form}>
          <input
            type="number"
            placeholder="Enter money"
            onChange={takeValue}
            name="moneyValue"
            value={money.moneyValue}
          />

          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            name="moneyType"
            id="expense"
            onChange={takeValue}
            value="expense"
          />
          <label htmlFor="saving">Saving</label>
          <input
            type="radio"
            name="moneyType"
            id="saving"
            onChange={takeValue}
            value="saving"
          />
          <button type="submit">Submit</button>
        </form>
        <h1>Expenditure: {reducerState.expenditure}$</h1>
        <h1>Savings: {reducerState.savings}$</h1>

        <h3>
          Transactions:
          {reducerState.transactions.map(({ moneyValue, moneyType }, id) => {
            return (
              <div key={id}>
                <span>{moneyValue}$ in </span>
                <span>{moneyType}</span>
              </div>
            );
          })}
        </h3>

        <h1>total : {total}$</h1>
      </div>
    </div>
  );
};

export default ExpenseTracker;
