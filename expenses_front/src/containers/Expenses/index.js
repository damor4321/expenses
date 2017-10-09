import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import InProgress from 'components/InProgress';
import { createStructuredSelector } from 'reselect';
import { selectUpdating } from './selectors';
import Controls from './Controls';
import Header from './Header';
import List from './List';

const style = {
  width: '90%',
  margin: '32px auto',
  padding: '16px',
};

export const Expenses = ({ listUpdating }) => {
  const items = [];
  items.push(<Controls key="Controls" />);
  items.push(<Header key="Header" />);
  if (listUpdating) items.push(<InProgress key="Progress" />);
  else items.push(<List key="List" />);
  return (
    <div style={style} >
      {items}
    </div>
  );
};

Expenses.propTypes = {
  listUpdating: PropTypes.bool.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  listUpdating: selectUpdating(),
});

export default connect(mapStateToProps)(Expenses);
