import react, { createContext, useState } from 'react';
import { Text, View, Button, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
import Task19 from './Tasks/Task19';
import Task20 from './Tasks/Task20';
import Task21 from './Tasks/Task21';
import Task22 from './Tasks/Task22';
import Task23 from './Tasks/Task23';
import Task24 from './Tasks/Task24/Task24';
import Task25 from './Tasks/Task25';
import Task26 from './Tasks/Task26';
import Task27 from './Tasks/Task27';
import Task28 from './Tasks/Task28';
import Task29 from './Tasks/Task29';
import Task30 from './Tasks/Task30';
import Task31 from './Tasks/Task31';
import Task32 from './Tasks/Task32';
import Task33 from './Tasks/Task33';
import Task34 from './Tasks/Task34';
import Task35 from './Tasks/Task35';
import Task36 from './Tasks/Task36';
import Task37 from './Tasks/Task37';
import Task39 from './Tasks/TaskCounter';

// import store from './Tasks/context/store';
import { Provider } from 'react-redux';
import Counter from './Tasks/Counter';

import ComponentTwo from './Tasks/Task38/ComponentTwo';
import React from 'react';
import { ContextProvider } from './Tasks/Task38/Context';

import MainComponent from './Tasks/State/Components/Main';
import { textReducer } from './Tasks/State/Reducers/Task39Reducers';
import { createStore } from 'redux';
import Task41 from './Tasks/Task41/Task41';
import Task42 from './Tasks/Task42/Task42';

import { textReducer39 } from './Tasks/Task39/Reducers/Task39Reducer';
// import {MainComponent39} from './Tasks/Task39/Components/Main39' 


// export const UserNameContext = createContext();
const store = createStore(textReducer);
const store39 = createStore(textReducer39);


const App=() => {  
  return(
    //style={{flex : 1, backgroundColor : 'green'}}
    <View style={{flex : 1}}>
      {/* <Task16></Task16>
      <Task17></Task17>
      <Task18></Task18>
      <Task19></Task19>
      <Task20></Task20>
      <Task21></Task21>
      <Task22></Task22>
      <Task23></Task23>
      <Task24></Task24>
      <Task25></Task25>
      <Task26></Task26>
      <Task27></Task27>
      <Task28></Task28>
      <Task29></Task29>
      <Task30></Task30>
      <Task32></Task32>
      <Task33></Task33>
      <Task34></Task34>
      <Task35></Task35> */}

      
      {/* // **********Task38**********
      <ContextProvider value={'Initial Text'}>
        <ComponentTwo/>
        <ComponentTwo/>
        <ComponentTwo/>
        <ComponentTwo/>
      </ContextProvider>       */}
      
      {/* **************Task 39************** */}
      {/* <Provider store={store39}>
        <MainComponent39 />       
      </Provider> */}

      {/* **********Task 40 *********** */}
      {/* <Provider store={store}>
            <MainComponent />
      </Provider> */}

      {/* <Task41></Task41> */}
      <Task42></Task42>



    </View>
    
  )
}

export default App;
