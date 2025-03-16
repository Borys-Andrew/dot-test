import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction } from "@/types";

import React from "react";

type TransactionsListprops = {
  transactions: Transaction[];
  total: number;
};

export default function TransactionsList({
  transactions,
  total,
}: TransactionsListprops) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Sum = {total.toFixed(8)} BTC</h2>
      <div className="max-h-[500px] overflow-y-auto border rounded-md">
        <Table className="text-start min-w-[600px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">From</TableHead>
              <TableHead className="w-[200px]">To</TableHead>
              <TableHead className="w-[150px]">Sum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.hash}>
                <TableCell className="truncate w-[200px] max-w-[200px]">
                  {tx.from}
                </TableCell>
                <TableCell className="truncate w-[200px] max-w-[200px]">
                  {tx.to}
                </TableCell>
                <TableCell className="truncate w-[150px] max-w-[150px]">
                  {tx.amount.toFixed(8)} BTC
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
