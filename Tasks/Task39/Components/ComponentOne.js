import React, { Component, useState } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setText } from '../Actions/Task39Actions';

const ComponentOne =()=> {
  onChangeText = (newText) => {
    setText(newText);
  };
  const [text, setText] = useState('')


    return (
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder="Enter text"
      />
    );
}

const mapStateToProps = (text) => ({
  text: text,
});

const mapDispatchToProps = {
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne)