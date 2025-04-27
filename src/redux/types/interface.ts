export interface UserAuthentication {
  fullName: string;
  position: string;
  userName: string;
}

export interface Item {
  name: string;
  description: string;
  category: string;
  price: number;
  dateAdded: number;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
}
