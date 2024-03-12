function ShowTODO() {
  let name = "fairoz";
  let date = "2019-8-31";
  return (
    <div className="container ">
      <div className="row row-custom">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn-custom">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ShowTODO;
