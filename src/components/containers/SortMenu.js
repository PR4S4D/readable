import { connect } from 'react-redux';
import { sort } from '../../actions';
import SortMenu from '../ui/SortMenu';
const mapStateToProps = (state, props) => ({
  sortId: state.sort
});

const mapDispatchToProps = {
  sort
};

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
