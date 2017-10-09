import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { grey200 } from 'material-ui/styles/colors';
import { createStructuredSelector } from 'reselect';
import { selectColumnWidths } from 'containers/Expenses/selectors';
import ExpensesItemRow from 'components/ExpensesItemRow';

import {
  ExpensesItemColumnDate,
  ExpensesItemColumnDescription,
  ExpensesItemColumnComment,
  ExpensesItemColumnAmount,
  ExpensesItemColumnEdit,
} from 'components/ExpensesItemColumn';

import SortableLabel from './SortableLabel';

export const ExpensesHeader = ({ widths }) => {
  const columns = [];
  /*
  columns.push(
    <ExpensesItemColumnId key="id" width={widths.id} >
      Id
    </ExpensesItemColumnId>
  );
  */
  columns.push(
    <ExpensesItemColumnDate key="date" width={widths.date} >
      <SortableLabel field="date">Date</SortableLabel>
    </ExpensesItemColumnDate>
  );
  columns.push(
    <ExpensesItemColumnDescription key="description" width={widths.description} >
      <SortableLabel field="description">Description</SortableLabel>
    </ExpensesItemColumnDescription>
  );
  columns.push(
    <ExpensesItemColumnComment key="comment" width={widths.comment} >
      <SortableLabel field="comment">Comment</SortableLabel>
    </ExpensesItemColumnComment>
  );
  columns.push(
    <ExpensesItemColumnAmount key="amount" width={widths.amount} >
      <SortableLabel field="amount">Amount</SortableLabel>
    </ExpensesItemColumnAmount>
  );
  columns.push(
    <ExpensesItemColumnEdit key="edit" width={widths.edit} >
      Edit
    </ExpensesItemColumnEdit>
  );

  return (
    <ExpensesItemRow
      style={{
        borderTop: `1px solid ${grey200}`,
      }}
    >
      {columns}
    </ExpensesItemRow>
  );
};


export const mapStateToProps = createStructuredSelector({
  widths: selectColumnWidths(),
});

ExpensesHeader.propTypes = {
  widths: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ExpensesHeader);
