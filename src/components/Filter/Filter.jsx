import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" />
    </FilterBox>
  );
};
