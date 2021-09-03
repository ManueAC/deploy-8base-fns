
export interface TaskType {
  id?: string;
  taskTitle: string;
  taskUser: string;
  taskDscr: string;
  taskCheck: boolean;
  taskStart: string;
  taskEnd: string;
}

export interface UserType {
  id?: string;
  email: string;
  status: string;
  firstName: string;
  lastName: string;
  secondName: string;
  origin: string;
};
