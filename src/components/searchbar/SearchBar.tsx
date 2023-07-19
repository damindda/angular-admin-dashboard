import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  const data: any[] = [
    {
      id: 1,
      name: 'Paris'
    },
    {
      id: 2,
      name: 'London'
    },
    {
      id: 3,
      name: 'Tokyo'
    },
    {
      id: 4,
      name: 'Berlin'
    }
  ];

  const filterData = (query: any, data: any) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d: any) => d.toLowerCase().includes(query));
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e: any) => {
            setSearchQuery(e.target.value);
          }}
          style={{ fill: 'white' }}
          label="search....."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <CiSearch style={{ fill: 'white' }} />
        </IconButton>
      </form>

      <div style={{ padding: 3, display: 'none' }}>
        {dataFiltered.map((d: any) => (
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
            key={d.id}>
            {d.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
