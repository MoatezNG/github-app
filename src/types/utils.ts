export type searchParams = {
  q: string;
};

export type PaginatedResponse<T> = {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
};
