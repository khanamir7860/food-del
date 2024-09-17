import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../assets/assets";
const List = () => {
  const [list, setList] = useState([]);
  // const url = "http://localhost:4000";
  const fetchList = async () => {
    const response = await axios.get(url + "/api/food/list");
    console.log(response);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((itme, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + itme.image} alt="" />
              <p>{itme.name}</p>
              <p>{itme.category}</p>
              <p>${itme.price}</p>
              <p className="cursor" onClick={() => removeFood(itme._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
