import { connect } from 'react-redux';
import PostCategories from '../ui/PostCategories';
import { setCategory, getCategories } from '../../actions';

const mapStateToProps = (state, props) => ({
  categories: state.categories,
  category: state.category
});

export default connect(mapStateToProps, { setCategory, getCategories })(
  PostCategories
);
