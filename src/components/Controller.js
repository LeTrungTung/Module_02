import { useState } from "react";

function Controller(props) {
  const [valueSearch, setValueSearch] = useState("");

  const handleValueSearch = (e) => {
    const { name, value } = e.target;
    // console.log("sea", { name, value });
    setValueSearch(value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    props.handleSetValue(valueSearch);
  };

  return (
    <div className="card-header">
      <div className="row">
        <div className="col-3">
          <button
            onClick={props.handleAddClick}
            type="button"
            className="btn btn-primary btn-icon-text"
          >
            Thêm mới sinh viên
          </button>
        </div>
        <div className="col-6">
          <form className="search-form" action="#">
            <i className="icon-search" />
            <input
              type="search"
              className="form-control"
              placeholder="Search Here"
              title="Search here"
              name="input-search"
              value={valueSearch}
              onChange={handleValueSearch}
            />
            <button
              className="btn btn-primary btn-icon-text"
              onClick={handleSearch}
            >
              Tìm kiếm
            </button>
          </form>
        </div>
        <div className="col-3 d-flex align-items-center">
          <select className="form-control">
            <option value="">Sắp xếp</option>
            <option value="">ABC def</option>
            <option value="">ABC def</option>
            <option value="">ABC def</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Controller;
