// import { Component } from "react";
import React, { useState, useEffect } from "react";

function FormInfo({
  onFormSubmit,
  viewDetail,
  editDetail,
  onFormUpdate,
}) {
  // console.log(88, editDetail);
  const [formData, setFormData] = useState({
    id: "",
    studentcode: "",
    name: "",
    age: "",
    sex: "",
    birthday: "",
    birthplace: "",
    address: "",
  });
  const [submit, setSubmit] = useState(true);

  // show thông tin chi tiết sinh viên
  useEffect(() => {
    if (viewDetail) {
      setFormData({
        id: viewDetail.id,
        studentcode: viewDetail.studentcode,
        name: viewDetail.name,
        age: viewDetail.age,
        sex: viewDetail.sex,
        birthday: viewDetail.birthday,
        birthplace: viewDetail.birthplace,
        address: viewDetail.address,
      });
    }
  }, [viewDetail]);

  // show thông tin để Edit chi tiết sinh viên
  useEffect(() => {
    if (editDetail) {
      setFormData({
        id: editDetail.id,
        studentcode: editDetail.studentcode,
        name: editDetail.name,
        age: editDetail.age,
        sex: editDetail.sex,
        birthday: editDetail.birthday,
        birthplace: editDetail.birthplace,
        address: editDetail.address,
      });
      setSubmit(false);
    }
  }, [editDetail]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData); // Truyền dữ liệu form cho App thông qua prop onFormSubmit
    setFormData({
      id: "",
      studentcode: "",
      name: "",
      age: "",
      sex: "",
      birthday: "",
      birthplace: "",
      address: "",
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin sinh viên</h3>
        <form className="form-sample" onSubmit={handleSubmit}>
          <div className="form-group row">
            {/* log(44,{formData}) */}
            <label className="col-sm-3 col-form-label">
              Mã sinh viên
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="studentcode"
                value={formData.studentcode}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Tên sinh viên
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tuổi</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Giới tính
            </label>
            <div className="col-sm-9">
              <select
                className="form-control"
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
              >
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Ngày sinh
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                placeholder="dd/mm/yyyy"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Nơi sinh
            </label>
            <div className="col-sm-9">
              <select
                className="form-control"
                name="birthplace"
                value={formData.birthplace}
                onChange={handleInputChange}
              >
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Quảng Ninh</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Địa chỉ</label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                // defaultValue={""}
                value={formData.address}
                name="address"
                onChange={handleInputChange}
              />
            </div>
          </div>
          {submit && (
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          )}
        </form>
        {!submit && (
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              // onFormSubmit(formData);
              const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData((prevData) => ({
                  ...prevData,
                  [name]: value,
                }));
              };
              onFormUpdate(formData); // Truyền dữ liệu form update cho App thông qua prop onFormUpdate
              // console.log(99, formData);
              setSubmit(true);
              setFormData({
                id: "",
                studentcode: "",
                name: "",
                age: "",
                sex: "",
                birthday: "",
                birthplace: "",
                address: "",
              });
            }}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default FormInfo;
