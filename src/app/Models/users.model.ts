export interface User {
  fullName: string;
  age: number;
}

export interface Users {
  userList: Array<User>;
  loading?: boolean;
}
