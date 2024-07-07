import { List } from "@components/List";
import { ListItem } from "@components/ListItem";
import { Loader } from "@components/Loader";
import { SEARCH_KEY } from "@constants/index";
import SearchContext from "@store/searchContext";
import { getSavedValueByKey } from "@utils/getSavedValue";
import { loadPlanets } from "@utils/loadPlanets";
import { Component, ContextType } from "react";

export class SearchList extends Component {
  static contextType = SearchContext;
  declare context: ContextType<typeof SearchContext>;

  changeLoadingStatus = (isLoading: boolean) => {
    this.context.setIsLoading(isLoading);
  };

  componentDidMount() {
    const searchValue = getSavedValueByKey(SEARCH_KEY);

    loadPlanets(this)(searchValue);
  }

  render() {
    const { planets, isLoading } = this.context;

    if (isLoading) return <Loader />;
    if (planets.length === 0) return <div>Planets weren't found</div>;

    return <List items={planets} Item={ListItem} />;
  }
}
