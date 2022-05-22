import "./CostForm.css";
import React, { useState } from "react";

const CostForm = (props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: description,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveCostData(costData);
    props.onCancel();

    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="new-cost__controls">
      <form onSubmit={submitHandler}>
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            value={description}
            onChange={descriptionChangeHandler}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            value={date}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить рассход</button>
          <button type="button" onClick={props.onCancel}>
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default CostForm;
