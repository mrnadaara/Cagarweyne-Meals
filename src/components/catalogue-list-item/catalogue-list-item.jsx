import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMealById, selectMeal } from '../../actions';

class CatalogueListItem extends React.Component {
  goToMealInfo = () => {
    const {
      fetchMealById, history, meal, selectMeal,
    } = this.props;
    if (meal.strArea) {
      selectMeal(meal);
      history.push('/mealInfo');
    } else {
      fetchMealById(meal.idMeal);
      history.push('/mealInfo');
    }
  };

  render() {
    const { meal } = this.props;
    return (
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
            onClick={this.goToMealInfo}
          >
            Check it out
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

CatalogueListItem.propTypes = {
  meal: PropTypes.arrayOf(PropTypes.string),
  fetchMealById: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.string),
  selectMeal: PropTypes.func,
};

CatalogueListItem.defaultProps = {
  meal: [],
  fetchMealById: () => {},
  selectMeal: () => {},
  history: {},
};

const mapDispatchToProps = action => bindActionCreators({
  fetchMealById, selectMeal,
}, action);

export default connect(null, mapDispatchToProps)(withRouter(CatalogueListItem));
