import React from 'react';

import transactions from './../../data/transaction.json';
import s from './TransactionHistory.module.css';

const TransactionHistory = () => {
  const tableClass = [s.tabel];
  return (<table className={tableClass}>
  <thead>
    <tr>
      <th>type</th>
      <th>amount</th>
      <th>currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(item =>{
      return (<tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)
    })}
  </tbody>
</table>)
}

export default TransactionHistory;