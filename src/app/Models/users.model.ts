export interface User {
  fullName: string;
  age: number;
  description: string;
}

export interface Users {
  userList: Array<User>;
  loading?: boolean;
}
