import { useSelector } from 'react-redux';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';
import { getContactFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(getContactFilter);
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={filterValue} />
    </FilterBox>
  );
};
