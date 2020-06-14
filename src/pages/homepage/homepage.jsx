import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMeals } from '../../actions';

import './homepage.scss';
import CatalogueList from '../../components/catalogue-list/catalogue-list';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchMeals } = this.props;
    fetchMeals();
  }

  render() {
    return (
      <div>
        <p>search</p>
        <CatalogueList />
      </div>
    );
  }
}

HomePage.propTypes = {
  fetchMeals: PropTypes.func,
};

HomePage.defaultProps = {
  fetchMeals: () => {},
};

const mapDispatchToProps = action => bindActionCreators({
  fetchMeals,
}, action);

export default connect(null, mapDispatchToProps)(HomePage);
