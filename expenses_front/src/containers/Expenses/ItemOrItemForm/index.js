import React, { PropTypes, PureComponent } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Item from 'containers/Expenses/Item';
import { createForm } from 'containers/Expenses/ItemForm';

export class ItemOrItemForm extends PureComponent {
  render() {
    const { expense } = this.props;
    const cid = expense.get('cid');
    let item;
    if (expense.get('edit')) {
      let values = expense;
      values = values.set('amount', values.get('amount') / 100);
      const Form = createForm(cid);
      item = (<Form initialValues={values} cid={cid} />);
    } else {
      item = (<Item expense={expense} />);
    }
    return item;
  }
}

export const mapStateToProps = createStructuredSelector({
});

ItemOrItemForm.propTypes = {
  expense: PropTypes.instanceOf(Map),
};

export default connect(mapStateToProps)(ItemOrItemForm);
