export interface Data {
  branch_id: string,
  categories: Array < {
    name: string,
    image: string,
    subcategories: Array<{
      name: string,
      image: string
    }>
  }>
}
