export type PaginationElement = { active?: boolean, onClick: () => void, text: string };

export type PaginationProps = {
  total: number,
  perPage: number,
  page: number,
  onChange: (page: number) => void
};
