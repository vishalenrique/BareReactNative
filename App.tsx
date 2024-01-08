/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={[{flex: 1}]}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
