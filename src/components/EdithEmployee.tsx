import React, { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
type Props = {
  data: IEmployee;
  handleBack: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};
const EdithEmployee = (props: Props) => {
  const { data, handleBack, onUpdateClickHnd } = props;
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

  const onSubmitBtTnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    handleBack();
  };
  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtTnClickHnd}>
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
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
  );
};

export default EdithEmployee;
