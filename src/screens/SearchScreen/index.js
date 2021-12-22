import React from 'react';
import SearchComponent from './../../components/Search/index';

const SearchScreen = ({route}) => {
  const itemData = route.params.data;
  console.log('data:', itemData);
  return <SearchComponent data={itemData} />;
};

export default SearchScreen;
