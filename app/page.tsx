import Header from "./_components/header";
import Image from "next/image";
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

      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-full w-full object-contain"
          sizes="100vw"
          quality={100}
        ></Image>
      </div>
    </div>
  );
};

export default Home;
