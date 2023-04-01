import { useSelector, useDispatch } from 'react-redux';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';
import { getContactFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(getContactFilter);
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={filter} onChange={handleFilterChange} />
    </FilterBox>
  );
};
