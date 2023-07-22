import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import { SearchResults } from '../top-navbar/SearchResults';

type Props = {
  placeholder?: string;
  data: SearchResults[];
};

const TopSearchBar = styled.div`
  color: purple;
  margin: 5px;
  padding: 2px;
  background-color: #fff;
`;

const SearchBar = (props: Props) => {
  const [keyword, setSearch] = useState('');
  const [filteredData, setData] = useState(props.data || []);

  const handleSearchInputs = () => {
    if (!keyword) return;

    const filteredValues: SearchResults[] = props.data.filter((item: SearchResults) =>
      item.name.toLowerCase().includes(keyword)
    );

    setData(filteredValues);
  };

  return (
    <TopSearchBar>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e: any) => {
            setSearch(e.target.value);
          }}
          style={{ fill: 'white' }}
          variant="outlined"
          placeholder={props.placeholder}
          size="small"
          onChange={handleSearchInputs}
        />
        <IconButton type="submit" aria-label="search">
          <CiSearch style={{ fill: 'white' }} />
        </IconButton>
      </form>

      <div className="search-results" style={{ padding: 3 }}>
        {filteredData.map((item: any) => (
          <div
            className="text"
            style={{
              padding: 5,
              justifyContent: 'normal',
              fontSize: 20,
              color: 'blue',
              margin: 1,
              width: '250px',
              borderWidth: '10px'
            }}
            key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </TopSearchBar>
  );
};

export default SearchBar;
