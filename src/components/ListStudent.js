import { Component } from "react";

function ListStudent({
  data,
  handleSetView,
  handleSetEdit,
  handleSetDelete,
}) {
  // const data1 = props.data;
  // console.log(66, { data });
  // Xem chi tiet thong tin sinh vien
  const handleView = (item) => {
    // console.log(77, item);
    handleSetView(item);
  };
  // Sửa thông tin sinh viên
  const handleEdit = (item) => {
    handleSetEdit(item);
  };
  // Xoá thông tin sinh viên
  const handleDelete = (item) => {
    handleSetDelete(item);
  };

  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.studentcode}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                      onClick={() => handleView(item)}
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                      onClick={() => handleEdit(item)}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                      onClick={() => handleDelete(item)}
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
