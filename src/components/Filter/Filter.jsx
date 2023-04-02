import { useSelector, useDispatch } from 'react-redux';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';
import { getContactFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getContactFilter);
  const dispatch = useDispatch();

  const handleFilterChange = query => dispatch(setFilter(query.toLowerCase()));

  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => handleFilterChange(evt.target.value)}
      />
    </FilterBox>
  );
};
