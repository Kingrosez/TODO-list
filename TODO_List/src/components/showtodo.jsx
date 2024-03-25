import { AiTwotoneDelete } from "react-icons/ai";
function ShowTODO({ items, deleteData }) {
  return (
    <>
      <div className="container ">
        {items.map((item) => (
          <div key={item.name} className="row row-custom">
            <div className="col-6">{item.name}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger btn-custom"
                onClick={() => deleteData(item)}
              >
                <AiTwotoneDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShowTODO;
