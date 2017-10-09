import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { Map } from 'immutable';
import ExpensesItemRow from 'components/ExpensesItemRow';
import {
  ExpensesItemColumnDate,
  ExpensesItemColumnDescription,
  ExpensesItemColumnComment,
  ExpensesItemColumnAmount,
  ExpensesItemColumnEdit,
} from 'components/ExpensesItemColumn';

import { selectColumnWidths } from 'containers/Expenses/selectors';
import { createStructuredSelector } from 'reselect';
import ActionIcons from './ActionIcons';

export const ExpensesItem = (props) => {
  const { expense, widths } = props;
  const columns = [];

  columns.push(
    <ExpensesItemColumnDate key="date" width={widths.date} >
      <span>
        {format(expense.get('date'), 'YYYY-MM-DD')}
      </span>
      {' '}
      <span
        style={{
          fontSize: '12px',
        }}
      >
        {format(expense.get('date'), 'h:m a')}
      </span>
    </ExpensesItemColumnDate>
  );

  columns.push(
    <ExpensesItemColumnDescription key="description" width={widths.description} >
      {expense.get('description')}
    </ExpensesItemColumnDescription>
  );

  columns.push(
    <ExpensesItemColumnComment key="comment" width={widths.comment} >
      {expense.get('comment')}
    </ExpensesItemColumnComment>
  );

  columns.push(
    <ExpensesItemColumnAmount key="amount" width={widths.amount} >
      {expense.get('amount') / 100} €
    </ExpensesItemColumnAmount>
  );

  columns.push(
    <ExpensesItemColumnEdit key="edit" width={widths.edit} >
      <ActionIcons expense={expense} />
    </ExpensesItemColumnEdit>
  );

  return (
    <ExpensesItemRow>
      {columns}
    </ExpensesItemRow>
  );
};

export const mapStateToProps = createStructuredSelector({
  widths: selectColumnWidths(),
});

ExpensesItem.propTypes = {
  widths: PropTypes.object.isRequired,
  expense: PropTypes.instanceOf(Map),
};

export default connect(mapStateToProps)(ExpensesItem);
