import React, { useEffect, useState } from "react";
import "./Login.style.css";
import { IEmployee, PageEnum } from "../../components/Employee.type";
import EmployeeList from "../../components/EmployeeList";
import AddEmployee from "../../components/AddEmployee";
import EdithEmployee from "../../components/EdithEmployee";
const Login = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);
  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList");
    if (listInString) {
      _setEmployeeList(JSON.parse(listInString));
    }
  }, []);
  const onAddEmployeeClick = () => {
    setShownPage(PageEnum.add);
  };
  const showListPage = () => {
    setShownPage(PageEnum.list);
  };
  const addEmployeeFormHandler = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]);
  };
  const EdithHandler = (data: IEmployee) => {
    setShownPage(PageEnum.edith);
    setDataToEdit(data);
  };
  const deleteEmployee = (data: IEmployee) => {
    // To index from array i, employeeList
    // Splice that
    // Update new record
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];
    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };
  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  };
  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  };
  return (
    <>
      <div className="article-header">
        <header>
          <h1>React: Simple CRUD Ap plication</h1>
        </header>
      </div>
      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClick}
              className="add-employee-btn"
            />

            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdith={EdithHandler}
            />
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddEmployee
            handleBack={showListPage}
            onSubmitClickHnd={addEmployeeFormHandler}
          />
        )}
        {shownPage === PageEnum.edith && (
          <EdithEmployee
            data={dataToEdit}
            handleBack={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Login;
