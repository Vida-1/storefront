import { useDispatch } from "react-redux";
import productSlice from "../../store/product";

const Category = () => {
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) => {
        const category = e.target.value;
        dispatch(
          productSlice.actions.setCategory(
            category === "" ? undefined : Number(category)
          )
        );
      }}
    >
      <option value="">All</option>
      <option value="1">electronics</option>
      <option value="2">food</option>
    </select>
  );
};

export default Category;