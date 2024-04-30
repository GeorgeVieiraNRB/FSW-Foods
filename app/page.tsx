import Header from "./_components/header";
import Search from "./_components/search";
import CategoryList from "./_components/category-list";
const name = "";
console.log(name);
const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="px-5 pt-6">
        <Search></Search>
      </div>
      <div className="px-5 pt-6">
        <CategoryList></CategoryList>
      </div>
    </div>
  );
};

export default Home;
