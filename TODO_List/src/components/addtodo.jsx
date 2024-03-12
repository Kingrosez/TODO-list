function AddTODO() {
  return (
    <div className="container ">
      <div className="row row-custom">
        <div className="col-6">
          <input type="text" placeholder="Enter The TODO Here " />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success btn-custom">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTODO;
