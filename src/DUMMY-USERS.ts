// users.ts

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  profileImage: string;
  todos: Todo[];
}

export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    profileImage: 'https://via.placeholder.com/150/1',
    todos: [
      { id: 1, task: 'Complete project report', completed: false },
      { id: 2, task: 'Buy groceries', completed: true },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    profileImage: 'https://via.placeholder.com/150/2',
    todos: [
      { id: 1, task: 'Call the plumber', completed: false },
      { id: 2, task: 'Read a book', completed: true },
    ],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    profileImage: 'https://via.placeholder.com/150/3',
    todos: [
      { id: 1, task: 'Schedule a meeting', completed: true },
      { id: 2, task: 'Clean the house', completed: false },
    ],
  },
  {
    id: 4,
    name: 'Bob Brown',
    profileImage: 'https://via.placeholder.com/150/4',
    todos: [
      { id: 1, task: 'Fix the bike', completed: false },
      { id: 2, task: 'Watch a movie', completed: true },
    ],
  },
  {
    id: 5,
    name: 'Charlie White',
    profileImage: 'https://via.placeholder.com/150/5',
    todos: [
      { id: 1, task: 'Practice coding', completed: false },
      { id: 2, task: 'Exercise', completed: true },
    ],
  },
  {
    id: 6,
    name: 'Daisy Black',
    profileImage: 'https://via.placeholder.com/150/6',
    todos: [
      { id: 1, task: 'Bake a cake', completed: true },
      { id: 2, task: 'Water the plants', completed: false },
    ],
  },
  {
    id: 7,
    name: 'Ella Green',
    profileImage: 'https://via.placeholder.com/150/7',
    todos: [
      { id: 1, task: 'Learn a new skill', completed: false },
      { id: 2, task: 'Write a blog post', completed: true },
    ],
  },
  {
    id: 8,
    name: 'Frank Red',
    profileImage: 'https://via.placeholder.com/150/8',
    todos: [
      { id: 1, task: 'Plan a trip', completed: true },
      { id: 2, task: 'Update resume', completed: false },
    ],
  },
  {
    id: 9,
    name: 'Grace Blue',
    profileImage: 'https://via.placeholder.com/150/9',
    todos: [
      { id: 1, task: 'Organize photos', completed: false },
      { id: 2, task: 'Attend a seminar', completed: true },
    ],
  },
  {
    id: 10,
    name: 'Henry Purple',
    profileImage: 'https://via.placeholder.com/150/10',
    todos: [
      { id: 1, task: 'Finish painting', completed: true },
      { id: 2, task: 'Call a friend', completed: false },
    ],
  },
];
