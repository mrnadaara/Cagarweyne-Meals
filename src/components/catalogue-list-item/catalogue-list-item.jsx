import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const CatalogueListItem = ({ meal, history }) => (
  <Card>
    <Card.Img variant="top" src={`${meal.strMealThumb}`} />
    <Card.Body>
      <Card.Title>{meal.strMeal}</Card.Title>
      <Card.Text>
        {meal.strTags}
      </Card.Text>
      <Button
        variant="primary"
        type="button"
        onClick={() => history.push({ pathname: '/mealInfo', state: { meal } })}
      >
        Check it out
      </Button>
    </Card.Body>
  </Card>
);

CatalogueListItem.propTypes = {
  meal: PropTypes.arrayOf(PropTypes.string),
  history: PropTypes.objectOf(PropTypes.string),
};

CatalogueListItem.defaultProps = {
  meal: [],
  history: {},
};

export default withRouter(CatalogueListItem);
