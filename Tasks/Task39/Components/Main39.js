import React, { Component, useState } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import ComponentOne from './ComponentOne';
import { setText } from '../Actions/Task39Actions';

const MainComponent39 =() => {
  const [isComponentOneVisible, setComponentOneVisible] = useState(true)

  toggleComponentOne = () => {
    setComponentOneVisible((prevState) => ({
      isComponentOneVisible: !prevState.isComponentOneVisible,
    }));
  };

    return (
      <View>
        {isComponentOneVisible && <ComponentOne />}
        <Button
          title={isComponentOneVisible ? 'Hide Component One' : 'Show Component One'}
          onPress={toggleComponentOne}
        />
      </View>
    );
}

const mapDispatchToProps = {
  setText,
};

export default connect(null, mapDispatchToProps)(MainComponent39);