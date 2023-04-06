import React, { useState } from "react";
import "./EmployeeForm.style.css";
import { IEmployee } from "./Employee.type";
type Props = {
  handleBack: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};
const AddEmployee = (Props: Props) => {
  const { handleBack, onSubmitClickHnd } = Props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
    handleBack();
  };
  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Email Add. : </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={handleBack} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
