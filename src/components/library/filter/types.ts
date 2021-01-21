export type FilterProps = {
  handleFilterClick: (id: string[]) => void,
  categories: { name: string, _id: string }[]
};

export type FilterElement = {
  name: string,
  _id: string
};
