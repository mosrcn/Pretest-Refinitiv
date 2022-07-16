import { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { FaSearch } from 'react-icons/fa';

import './App.css';

function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  const searchable = useMemo<string[]>(() => {
    return !search ? categories : categories.filter((category) => category.toLowerCase().includes(search));
  }, [categories, search]);

  useEffect(() => {
    axios
      .get('https://api.publicapis.org/categories')
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const onSearch = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setSearch(e.target.value);
  }, []);

  const handleSearch = _.debounce(onSearch, 500);

  return (
    <div className='container'>
      <div className='search-container'>
        <input type='text' onChange={handleSearch} />
        <FaSearch />
      </div>
      <table>
        <colgroup>
          <col width={100} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>No.</th>
            <th>Category name</th>
          </tr>
          {searchable.map((category, index) => (
            <tr key={index}>
              <td align='center'>{index + 1}</td>
              <td align='left'>{category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
