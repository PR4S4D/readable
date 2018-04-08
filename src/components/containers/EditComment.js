import { connect } from 'react-redux';
import EditComment from '../ui/EditComment';
import { updateComment, cancelEdit } from '../../actions';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = { updateComment, cancelEdit };

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
