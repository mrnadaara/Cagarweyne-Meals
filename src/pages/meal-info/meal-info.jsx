/* eslint-disable no-useless-escape */
import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import {
  Container, Col, Row, Tabs, Tab,
} from 'react-bootstrap';
import { connect } from 'react-redux';

class MealInfo extends React.Component {
  renderIngredients = () => {
    const { meal } = this.props;
    const string = [];

    for (let i = 0; i < 20; i += 1) {
      if (meal[`strIngredient${i + 1}`]) {
        const li = (<li key={i + 1}>{`${meal[`strMeasure${i + 1}`]} of ${meal[`strIngredient${i + 1}`]}`}</li>);
        string.push(li);
      }
    }

    return string;
  }

  extractId = videoUrl => {
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    return videoUrl.match(regex)[1];
  }

  render() {
    const { meal } = this.props;
    const opts = {
      height: '500',
    };
    return (
      <Container fluid>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <img className="w-100" src={meal.strMealThumb} alt="" />
          </Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div>
              <h1>
                { meal.strMeal }
              </h1>
              <h5>
                { `${meal.strCategory}, ${meal.strArea}` }
              </h5>
            </div>
            <Tabs defaultActiveKey="instruction" id="meal-info-tab">
              <Tab eventKey="instruction" title="Instructions">
                { meal.strInstructions }
              </Tab>
              <Tab eventKey="ingredient" title="Ingredients">
                <ol>
                  {
                    this.renderIngredients()
                  }
                </ol>
              </Tab>
              <Tab eventKey="video" title="Video">
                {!meal.strYoutube ? null : <YouTube className="w-100" videoId={this.extractId(meal.strYoutube)} opts={opts} />}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

MealInfo.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string),
};

MealInfo.defaultProps = {
  meal: {},
};

const mapStateToProps = ({ mealsList }) => (
  {
    meal: mealsList.selectedMeal,
  }
);

export default connect(mapStateToProps)(MealInfo);
