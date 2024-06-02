import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setText } from '../Actions/Task39Actions';

class ComponentOne extends Component {
  onChangeText = (newText) => {
    this.props.setText(newText);
  };

  render() {
    return (
      <TextInput
        value={this.props.text}
        onChangeText={this.onChangeText}
        placeholder="Enter text"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.text,
});

const mapDispatchToProps = {
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne)