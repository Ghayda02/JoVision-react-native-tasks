import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import ComponentOne from './ComponentOne';
import { setText } from '../Actions/Task39Actions';

class MainComponent extends Component {
  state = {
    isComponentOneVisible: true,
  };

  toggleComponentOne = () => {
    this.setState((prevState) => ({
      isComponentOneVisible: !prevState.isComponentOneVisible,
    }));
  };

  render() {
    return (
      <View>
        {this.state.isComponentOneVisible && <ComponentOne />}
        <Button
          title={this.state.isComponentOneVisible ? 'Hide Component One' : 'Show Component One'}
          onPress={this.toggleComponentOne}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  setText,
};

export default connect(null, mapDispatchToProps)(MainComponent);