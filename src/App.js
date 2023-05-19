import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Controller from "./components/Controller";
import ListStudent from "./components/ListStudent";
import FormInfo from "./components/FormInfo";

function App() {
  const [resultSearch, setResultSearch] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [view, setView] = useState(null);
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    setResultSearch(tableData);
  }, [tableData]);

  // search dữ liệu theo tên sinh viên
  const handleSetValue = (text) => {
    const result = tableData.filter((item) =>
      item.name.includes(text)
    );
    setResultSearch(result);
  };
  const handleView = (data) => {
    setView(data);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };
  const handleDelete = (index) => {
    const newData = [...tableData]; //Tạo mảng sao của mảng data
    newData.splice(index, 1);
    setTableData(newData);
  };

  const handleFormSubmit = (formData) => {
    // console.log(formData);
    setTableData((prevData) => [...prevData, formData]);
  };

  // thay thế thông tin sinh viên sau khi Edit xong
  const handleFormUpdate = (formData) => {
    const updateTable = tableData.map((item) => {
      if (item.studentcode === formData.studentcode) {
        return { ...item, ...formData };
      }
      return item;
    });
    setTableData(updateTable);
  };
  // console.log(12, tableData);
  function handleAddClick() {
    setToggle(!toggle);
  }

  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}
          <Controller
            handleAddClick={handleAddClick}
            handleSetValue={handleSetValue}
          />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <ListStudent
            data={resultSearch}
            handleSetView={handleView}
            handleSetEdit={handleEdit}
            handleSetDelete={handleDelete}
          />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      <div className="col-5 grid-margin">
        {toggle && (
          <FormInfo
            onFormSubmit={handleFormSubmit}
            viewDetail={view}
            editDetail={edit}
            onFormUpdate={handleFormUpdate}
          />
        )}
      </div>

      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default App;
