import { useContext, useRef } from "react";
import { MdAddComment } from "react-icons/md";
import { TodoContext } from "../store/contect";

function AddTODO() {
  const eventName = useRef();
  const eventDate = useRef();
  const { handelAdd } = useContext(TodoContext);
  const addClicked = (event) => {
    event.preventDefault();
    const newEvent = eventName.current.value;
    const newDate = eventDate.current.value;
    handelAdd(newEvent, newDate);
  };
  return (
    <div className="container ">
      <form className="row row-custom" onSubmit={addClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter The TODO Here "
            ref={eventName}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={eventDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success btn-custom">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTODO;
