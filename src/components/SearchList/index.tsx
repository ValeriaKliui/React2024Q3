import { List } from '@components/List';
import { ListItem } from '@components/ListItem';
import { Loader } from '@components/Loader';
import { SEARCH_KEY } from '@constants/index';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useFetchAndSet } from '@hooks/useFetchAndSet';
import SearchContext from '@store/searchContext';
import { fetchPlanets } from '@utils/fetchPlanets';
import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const SearchList = ({ onClick }) => {
  const [urlParams, setUrlParams] = useSearchParams();
  const { isLoading, planets } = useContext(SearchContext);
  const [savedSearchValue] = useLocalStorage(SEARCH_KEY, '');

  const navigate = useNavigate();
  const { setIsLoading, setPlanets } = useContext(SearchContext);
  const loadPlanets = useFetchAndSet({ setIsLoading, setItems: setPlanets, fetchFunc: fetchPlanets });

  useEffect(() => {
    loadPlanets({ searchValue: savedSearchValue });
  }, [loadPlanets, savedSearchValue]);

  const onPlanetClick = (name: string) => {
    navigate('detail/');
    setUrlParams({ ...urlParams, detail: name, page: '2' });
  };

  if (isLoading) return <Loader />;
  if (planets.length === 0) return <div>Planets weren't found</div>;

  return (
    <List
      items={planets}
      onClick={onClick}
      Item={({ name, ...props }) => (
        <ListItem name={name} onClick={onPlanetClick} {...props} />
      )}
    />
  );
};
