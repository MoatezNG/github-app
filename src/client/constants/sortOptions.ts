import { DropdownItemProps } from 'semantic-ui-react';

export const sortOptions: DropdownItemProps[] = [
  { text: 'alphabetical order', value: 'ALPHA', key: 'alpha' },
  { text: 'favorites', value: 'FAVORITES', key: 'favorites' },
];

export type SortingValues = 'ALPHA' | 'FAVORITES';
