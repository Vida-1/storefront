import { useDispatch } from "react-redux";
import productSlice from "../../store/product";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <article className="Product">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>{product.title}</h2>
        <button
          onClick={() => {
            dispatch(productSlice.actions.showProduct(product));
          }}
        >
          Open
        </button>
      </header>
      <main>
        <figure>
          <img src={product.image_url} width="200px" alt={product.keyword} />
        </figure>
        <p>{product.description}</p>
      </main>
    </article>
  );
};

export default Product;
