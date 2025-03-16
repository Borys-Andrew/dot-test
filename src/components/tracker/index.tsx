import React, { useState } from "react";

import { create } from "zustand";

const useTransactionStore = create((set) => ({
  transactions: [],
  total: 0,
  addTransaction: (tx) =>
    set((state) => ({
      transactions: [tx, ...state.transactions],
      total: state.total + tx.amount,
    })),
  reset: () => set({ transactions: [], total: 0 }),
}));

export default function BitcoinTracker() {
  const { transactions, total, addTransaction, reset } = useTransactionStore();
  const [socket, setSocket] = useState(null);

  const startTracking = () => {
    if (socket) return;
    const ws = new WebSocket("wss://ws.blockchain.info/inv");
    ws.onopen = () => ws.send(JSON.stringify({ op: "unconfirmed_sub" }));
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const amount =
        data.x.out.reduce((sum, output) => sum + output.value, 0) / 1e8;
      addTransaction({ hash: data.x.hash, amount });
    };
    setSocket(ws);
  };

  const stopTracking = () => {
    if (socket) {
      socket.close();
      setSocket(null);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Bitcoin Transactions</h1>
      <div style={{ marginBottom: 20 }}>
        <Button
          onClick={startTracking}
          type="primary"
          style={{ marginRight: 10 }}
        >
          Start
        </Button>
        <Button onClick={stopTracking} style={{ marginRight: 10 }}>
          Stop
        </Button>
        <Button onClick={reset} danger>
          Reset
        </Button>
      </div>
      <h3>Total Received: {total} BTC</h3>
      <Table
        dataSource={transactions.map((tx, index) => ({ ...tx, key: index }))}
        columns={[
          { title: "Hash", dataIndex: "hash" },
          { title: "Amount (BTC)", dataIndex: "amount" },
        ]}
        pagination={false}
      />
    </div>
  );
}
