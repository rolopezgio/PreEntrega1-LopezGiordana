import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useCollection } from "../hooks/useCollection";

const Home = () => {

  const { data } = useCollection("products");

  return <ItemListContainer productsData={data} />
};

export default Home;