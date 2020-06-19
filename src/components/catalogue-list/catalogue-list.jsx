import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import './catalogue-list.scss';
import CatalogueListItem from '../catalogue-list-item/catalogue-list-item';

const CatalogueList = ({ mealsList }) => (
  <Container fluid>
    <Row>
      {
        mealsList.map(meal => (
          <Col className="column" xs={12} sm={6} md={6} lg={3} key={meal.idMeal}>
            <CatalogueListItem meal={meal} />
          </Col>
        ))
      }
    </Row>
  </Container>
);

CatalogueList.propTypes = {
  mealsList: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strDrinkAlternate: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
    strTags: PropTypes.string,
    strYoutube: PropTypes.string,
    strIngredient1: PropTypes.string,
    strIngredient2: PropTypes.string,
    strIngredient3: PropTypes.string,
    strIngredient4: PropTypes.string,
    strIngredient5: PropTypes.string,
    strIngredient6: PropTypes.string,
    strIngredient7: PropTypes.string,
    strIngredient8: PropTypes.string,
    strIngredient9: PropTypes.string,
    strIngredient10: PropTypes.string,
    strIngredient11: PropTypes.string,
    strIngredient12: PropTypes.string,
    strIngredient13: PropTypes.string,
    strIngredient14: PropTypes.string,
    strIngredient15: PropTypes.string,
    strIngredient16: PropTypes.string,
    strIngredient17: PropTypes.string,
    strIngredient18: PropTypes.string,
    strIngredient19: PropTypes.string,
    strIngredient20: PropTypes.string,
    strMeasure1: PropTypes.string,
    strMeasure2: PropTypes.string,
    strMeasure3: PropTypes.string,
    strMeasure4: PropTypes.string,
    strMeasure5: PropTypes.string,
    strMeasure6: PropTypes.string,
    strMeasure7: PropTypes.string,
    strMeasure8: PropTypes.string,
    strMeasure9: PropTypes.string,
    strMeasure10: PropTypes.string,
    strMeasure11: PropTypes.string,
    strMeasure12: PropTypes.string,
    strMeasure13: PropTypes.string,
    strMeasure14: PropTypes.string,
    strMeasure15: PropTypes.string,
    strMeasure16: PropTypes.string,
    strMeasure17: PropTypes.string,
    strMeasure18: PropTypes.string,
    strMeasure19: PropTypes.string,
    strMeasure20: PropTypes.string,
    strSource: PropTypes.string,
    dateModified: PropTypes.string,
  })),
};

CatalogueList.defaultProps = {
  mealsList: [],
};

const mapStateToProps = ({ mealsList }) => (
  {
    mealsList: mealsList.meals,
  }
);

export default connect(mapStateToProps)(CatalogueList);
