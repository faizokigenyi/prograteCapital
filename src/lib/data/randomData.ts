import { Transaction } from "@/types/Transaction";

const generateRandomName = () => {
  const firstNames = ["John", "Jane", "Mark", "Emily", "Tom", "Sarah"];
  const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Davis", "Wilson"];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

const generateRandomNIN = () => {
  return `${Math.floor(Math.random() * 1000000000)}`;
};

const generateRandomDate = () => {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString();
};

const generateRandomAmount = () => {
  return Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000;
};

const generateRandomStatus = () => {
  const statuses = ["Paid", "Pending"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const randomData: Transaction[] = Array.from({ length: 5 }).map(() => ({
  customerName: generateRandomName(),
  nin: generateRandomNIN(),
  date: generateRandomDate(),
  amount: generateRandomAmount(),
  status: generateRandomStatus(),
}));
