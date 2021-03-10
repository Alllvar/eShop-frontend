export type FilterProps = {
  handleFilterClick: (id: string[]) => void,
  categories: { name: string, _id: string }[],
  handleRange: (priceFrom: number, priceTo: number) => void
  handleSort: (sortBy: string, sortDirection: string) => void
};

export type FilterElement = {
  name: string,
  _id: string
};
