export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  isRead: boolean;
}

// types/Employee.ts (optional to separate type cleanly)
export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  department: string;
  status: 'Active' | 'Inactive';
};

export type Transaction = {
  customerName: string;
  nin: string;
  date: string;
  amount: number;
  status: 'Paid' | 'Pending';
};
