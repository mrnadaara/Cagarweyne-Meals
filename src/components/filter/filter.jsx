import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMeals } from '../../actions';

const Filter = ({ categoryList }) => (
  <Form.Group>
    <Row>
      <Col>
        <Form.Control as="select" size="lg">
          {
            categoryList.map(category => (
              <option key={category}>{category}</option>
            ))
          }
        </Form.Control>
      </Col>
      <Col>
        <Form.Control as="select" size="lg">
          {
            categoryList.map(category => (
              <option key={category}>{category}</option>
            ))
          }
        </Form.Control>
      </Col>
    </Row>
  </Form.Group>
);

Filter.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.object),
};

Filter.defaultProps = {
  categoryList: [],
};

const mapStateToProps = ({ filter }) => (
  {
    categoryList: filter.categories,
    areaList: filter.areas,
    ingredientList: filter.ingredients,
  }
);

const mapDispatchToProps = action => bindActionCreators({
  fetchMeals,
}, action);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
