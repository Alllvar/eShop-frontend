export type PaginationElement = { active?: boolean, onClick: () => void, text: string };

export type PaginationProps = {
    getItemsCount: (callback: (count: number) => void) => void,
    onChange: (limit: number, skip: number) => void
}