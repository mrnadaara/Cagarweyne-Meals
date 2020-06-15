import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilters } from '../../actions';

import './homepage.scss';
import CatalogueList from '../../components/catalogue-list/catalogue-list';
import Search from '../../components/search/search';
import Filter from '../../components/filter/filter';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchFilters } = this.props;
    fetchFilters();
  }

  render() {
    return (
      <div>
        <Search />
        <Filter />
        <CatalogueList />
      </div>
    );
  }
}

HomePage.propTypes = {
  fetchFilters: PropTypes.func,
};

HomePage.defaultProps = {
  fetchFilters: () => {},
};

const mapDispatchToProps = action => bindActionCreators({
  fetchFilters,
}, action);

export default connect(null, mapDispatchToProps)(HomePage);
