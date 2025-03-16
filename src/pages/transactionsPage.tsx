import { TransactionControlPanel } from "@/components";
import TransactionsList from "@/components/transactionsTable";
import { Transaction } from "@/types";

import React, { useEffect, useState } from "react";

export const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const addTransaction = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);
    setTotal((prev) => prev + tx.amount);
  };

  const reset = () => {
    setTransactions([]);
    setTotal(0);
  };

  const startTracking = (): void => {
    if (socket) return;
    const ws = new WebSocket("wss://ws.blockchain.info/inv");
    ws.onopen = () => ws.send(JSON.stringify({ op: "unconfirmed_sub" }));
    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      const amount =
        data.x.out.reduce(
          (sum: number, output: { value: number }) => sum + output.value,
          0,
        ) / 1e8;
      const from = data.x.inputs[0]?.prev_out?.addr || "Unknown";
      const to = data.x.out[0]?.addr || "Unknown";

      const transaction: Transaction = {
        hash: data.x.hash,
        from,
        to,
        amount,
      };
      addTransaction(transaction);
    };
    setSocket(ws);
  };

  const stopTracking = (): void => {
    if (socket) {
      socket.close();
      setSocket(null);
    }
  };

  useEffect(() => {
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);

  return (
    <div className="h-[calc(100vh-120px)] max-w-fit mx-auto text-center">
      <TransactionControlPanel
        onStart={startTracking}
        onStop={stopTracking}
        onReset={reset}
      />
      <TransactionsList transactions={transactions} total={total} />
    </div>
  );
};
