import React from 'react';
import PropTypes from 'prop-types';

const CatalogueListItem = ({ meal }) => (
  <div>
    {meal.strMeal}
  </div>
);

CatalogueListItem.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string),
};

CatalogueListItem.defaultProps = {
  meal: [],
};

export default CatalogueListItem;
