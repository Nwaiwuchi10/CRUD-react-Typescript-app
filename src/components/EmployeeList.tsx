import React, { useState } from "react";
import "./EmployeeList.style.css";
import { IEmployee } from "./Employee.type";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdith: (data: IEmployee) => void;
};
const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdith } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);
  return (
    <div>
      <article className="list-header">
        <h3> Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>

          <th>Email</th>
          <th>Actions</th>
        </tr>
        {list.map((employee) => {
          //   console.log(employee);
          return (
            <tr>
              <td> {`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email} </td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdith(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
              {showModal && dataToShow !== null && (
                <EmployeeModal onClose={onCloseModal} data={dataToShow} />
              )}
              {/* <td>{employee.firstName} </td>
              <td>{employee.lastName} </td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
