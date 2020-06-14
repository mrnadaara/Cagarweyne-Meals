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
  mealsList: PropTypes.arrayOf(PropTypes.object),
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
