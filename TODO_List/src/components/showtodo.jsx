function ShowTODO({ items }) {
  let name = "fairoz";
  let date = "2019-8-31";

  return (
    <>
      <div className="container ">
        {items.map((item) => (
          <div className="row row-custom">
            <div key={name} className="col-6">
              {item.name}
            </div>
            <div key={date} className="col-4">
              {item.date}
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger btn-custom">
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShowTODO;
