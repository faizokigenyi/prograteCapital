import { Column } from '@/components/ReusableTable';
import { Transaction } from '@/types/types';

export const transactionColumns: Column<Transaction>[] = [
  { header: 'Customer Name', accessor: 'customerName' },
  { header: 'NIN', accessor: 'nin' },
  { header: 'Date', accessor: 'date' },
  { header: 'Amount', accessor: 'amount' },
  { header: 'Status', accessor: 'status' },
];
