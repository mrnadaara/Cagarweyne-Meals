import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  Button,
  FormControl,
  Form,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMeals } from '../../actions';

import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleInput = event => {
    this.setState({ search: event.target.value });
  };

  handleForm = event => {
    const { fetchMeals } = this.props;
    const { search } = this.state;
    event.preventDefault();
    fetchMeals(search);
  };

  render() {
    const { search } = this.state;
    return (
      <Form onSubmit={this.handleForm}>
        <InputGroup className="mb-3 search-input">
          <FormControl
            onChange={this.handleInput}
            value={search}
            placeholder="Search your favourite meal"
            aria-label="Search your favourite meal"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              type="submit"
            >
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

Search.propTypes = {
  fetchMeals: PropTypes.func,
};

Search.defaultProps = {
  fetchMeals: () => {},
};

const mapDispatchToProps = action => bindActionCreators({
  fetchMeals,
}, action);

export default connect(null, mapDispatchToProps)(Search);
