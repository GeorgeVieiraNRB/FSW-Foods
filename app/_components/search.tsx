import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Search = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Buscar restaurantes" className="border-none"></Input>
      <Button size="icon">
        <SearchIcon size={20}></SearchIcon>
      </Button>
    </div>
  );
};

export default Search;
