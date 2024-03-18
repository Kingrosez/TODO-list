import { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { TodoContext } from "../store/contect";
function ShowTODO() {
  const { todoItems, handelDelete } = useContext(TodoContext);
  return (
    <>
      <div className="container ">
        {todoItems.map((item) => (
          <div key={item.name} className="row row-custom">
            <div className="col-6">{item.name}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger btn-custom"
                onClick={() => handelDelete(item.name)}
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
