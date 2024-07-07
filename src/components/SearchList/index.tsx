import { List } from "@components/List";
import { SEARCH_KEY } from "@constants/index";
import SearchContext from "@store/searchContext";
import { fetchPlanets } from "@utils/fetchPlanets";
import { getSavedValueByKey } from "@utils/getSavedValue";
import { Component } from "react";

export class SearchList extends Component {
  componentDidMount() {
    const searchValue = getSavedValueByKey(SEARCH_KEY);

    if (searchValue)
      fetchPlanets({ searchValue }).then((response) =>
        this.context.setPlanets(response.results)
      );
  }

  render() {
    const { planets } = this.context;
    console.log(planets);
    return <List items={planets} Item={({ name }) => <div>{name}</div>} />;
  }
}

SearchList.contextType = SearchContext;
