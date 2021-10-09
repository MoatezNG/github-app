import { useEffect, useState } from 'react';
import { PaginationProps } from 'semantic-ui-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePagination = <T extends Record<string, any>>(
  data: T[],
  limit: number,
): {
  paginatedData: T[];
  handleNextPage: (_: React.MouseEvent<HTMLAnchorElement>, props: PaginationProps) => void;
  activePage: number;
  totalPages: number;
} => {
  const [activePage, setActivePage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);

  useEffect(() => {
    setPaginatedData(data.slice((activePage - 1) * limit, limit * activePage));
  }, [activePage, data]);
  const handleNextPage = (_: React.MouseEvent<HTMLAnchorElement>, props: PaginationProps) => {
    setActivePage(props.activePage as number);
  };

  return {
    paginatedData,
    handleNextPage,
    activePage,
    totalPages: Math.ceil(data.length / limit),
  };
};
