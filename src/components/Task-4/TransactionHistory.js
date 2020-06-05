import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  const tableClass = [styles.tabel];
  return (<table className={tableClass.join(' ')}>
  <thead>
    <tr>
      <th>type</th>
      <th>amount</th>
      <th>currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item =>{
      return (<tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)
    })}
  </tbody>
</table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
  })).isRequired
};

export default TransactionHistory;