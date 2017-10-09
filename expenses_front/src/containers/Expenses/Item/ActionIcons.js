import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import EditIcon from 'components/EditIcon';
import DeleteIcon from 'components/DeleteIcon';
import CircularProgress from 'material-ui/CircularProgress';
import { grey400 } from 'material-ui/styles/colors';
import { editModeOn, del } from './actions';

const style = {
  display: 'flex',
  justifyContent: 'space-around',
};

export const Icons = ({ handleEdit, handleDelete, expense }) => {
  let nodes;
  if (expense.get('deleting')) {
    nodes = (
      <div
        style={style}
      >
        <CircularProgress
          size={25}
          thickness={3}
          color={grey400}
        />
      </div>
    );
  } else {
    nodes = (
      <div
        style={style}
      >
        <EditIcon onClick={handleEdit} />
        <DeleteIcon onClick={handleDelete} />
      </div>
    );
  }
  return nodes;
};

export const mapDispatchToProps = (dispatch, props) => ({
  handleEdit: () => dispatch(editModeOn(props.expense)),
  handleDelete: () => dispatch(del(props.expense)),
});

Icons.propTypes = {
  expense: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Icons);
