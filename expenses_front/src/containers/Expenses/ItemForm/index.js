import React, { PropTypes } from 'react';
import trimStart from 'lodash/trimStart';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { reduxForm, Field } from 'redux-form/immutable';
import ExpensesItemRow from 'components/ExpensesItemRow';
import {
  ExpensesItemColumnDate,
  ExpensesItemColumnDescription,
  ExpensesItemColumnComment,
  ExpensesItemColumnAmount,
  ExpensesItemColumnEdit,
} from 'components/ExpensesItemColumn';
import InputText from 'components/InputText';
import InputTextarea from 'components/InputTextarea';
import InputDate from 'components/InputDate';
import InputTime from 'components/InputTime';
import { selectColumnWidths } from 'containers/Expenses/selectors';
import { createStructuredSelector } from 'reselect';
import validate from './validate';
import ActionIcons from './ActionIcons';

const fieldStyle = {
  width: '100%',
};

export const parseAmount = (value) => {
  if (value.indexOf('.') === -1 && value[0] === '0' && value.length > 1) {
    return trimStart(value, '0');
  }
  return value;
};

const ExpensesItemForm = (props) => {
  const {
    handleSubmit,
    initialValues,
    widths,
    form,
  } = props;
  const fields = [];

  fields.push(
    <ExpensesItemColumnDate key="date" width={widths.date} >
      <Field
        name="date"
        formId={form}
        component={InputDate}
        style={{
          width: '90px',
          display: 'inline-block',
          marginRight: '20px',
        }}
      />
      <Field
        name="date"
        component={InputTime}
        style={{
          width: '70px',
          display: 'inline-block',
        }}
      />
    </ExpensesItemColumnDate>
  );

  fields.push(
    <ExpensesItemColumnDescription key="description" width={widths.description} >
      <Field
        name="description"
        component={InputTextarea}
        style={fieldStyle}
      />
    </ExpensesItemColumnDescription>
  );

  fields.push(
    <ExpensesItemColumnComment key="comment" width={widths.comment} >
      <Field
        name="comment"
        component={InputTextarea}
        style={fieldStyle}
      />
    </ExpensesItemColumnComment>
  );

  fields.push(
    <ExpensesItemColumnAmount key="amount" width={widths.amount} >
      <Field
        name="amount"
        component={InputText}
        style={fieldStyle}
        parse={parseAmount}
      />
    </ExpensesItemColumnAmount>
  );

  fields.push(
    <ExpensesItemColumnEdit key="edit" width={widths.edit} >
      <ActionIcons expense={initialValues} handleSubmit={handleSubmit} />
    </ExpensesItemColumnEdit>
  );

  return (
    <ExpensesItemRow>
      {fields}
    </ExpensesItemRow>
  );
};

const mapStateToProps = createStructuredSelector({
  widths: selectColumnWidths(),
});

ExpensesItemForm.propTypes = {
  form: PropTypes.string.isRequired,
  widths: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.instanceOf(Map).isRequired,
};

export const createForm = form => connect(
  mapStateToProps,
)(reduxForm({ form, validate })(ExpensesItemForm));

export default ExpensesItemForm;
