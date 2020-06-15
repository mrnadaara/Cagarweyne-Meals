import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Col, Row, InputGroup,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchByFilter } from '../../actions';

import './filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredient: '...',
      category: '...',
      country: '...',
    };
  }

  handleChange = event => {
    const { fetchByFilter } = this.props;
    fetchByFilter(event.target.value, event.target.id);
    if (event.target.id === 'ingredient') {
      this.setState({
        ingredient: event.target.value,
        category: '...',
        country: '...',
      });
    } else if (event.target.id === 'category') {
      this.setState({
        ingredient: '...',
        category: event.target.value,
        country: '...',
      });
    } else if (event.target.id === 'country') {
      this.setState({
        ingredient: '...',
        category: '...',
        country: event.target.value,
      });
    }
  };

  render() {
    const { categoryList, areaList, ingredientList } = this.props;
    const { ingredient, country, category } = this.state;
    return (
      <Form.Group className="filter-container">
        <Row>
          <Col className="filter-dropdown" xs={12} sm={12} md={12} lg={3}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control id="category" value={category} onChange={this.handleChange} as="select" size="lg">
                <option>...</option>
                {
                  categoryList.map(category => (
                    <option key={category}>{category.strCategory}</option>
                  ))
                }
              </Form.Control>
            </InputGroup>
          </Col>
          <Col className="filter-dropdown" xs={12} sm={12} md={12} lg={3}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control id="country" value={country} onChange={this.handleChange} as="select" size="lg">
                <option>...</option>
                {
                  areaList.map(area => (
                    <option key={area}>{area.strArea}</option>
                  ))
                }
              </Form.Control>
            </InputGroup>
          </Col>
          <Col className="filter-dropdown" xs={12} sm={12} md={12} lg={3}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Ingredient</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control id="ingredient" value={ingredient} onChange={this.handleChange} as="select" size="lg">
                <option>...</option>
                {
                  ingredientList.map(ingredient => (
                    <option key={ingredient}>{ingredient.strIngredient}</option>
                  ))
                }
              </Form.Control>
            </InputGroup>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

Filter.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.object),
  areaList: PropTypes.arrayOf(PropTypes.object),
  ingredientList: PropTypes.arrayOf(PropTypes.object),
  fetchByFilter: PropTypes.func,
};

Filter.defaultProps = {
  categoryList: [],
  areaList: [],
  ingredientList: [],
  fetchByFilter: () => {},
};

const mapStateToProps = ({ filterList }) => (
  {
    categoryList: filterList.categories,
    areaList: filterList.areas,
    ingredientList: filterList.ingredients,
  }
);

const mapDispatchToProps = action => bindActionCreators({
  fetchByFilter,
}, action);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
