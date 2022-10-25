/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const [number, setNumber] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={backgroundStyle}
      testID="app-root"
      accessibilityLabel="app-root"
      class="t">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title="add"
            onPress={() => setNumber(number + 1)}
            testID="add-button"
            accessibilityLabel="add-button"
          />
          <Button
            title="sub"
            onPress={() => setNumber(number - 1)}
            testID="sub-button"
            accessibilityLabel="sub-button"
          />
          <Text testID="number-text" accessibilityLabel="number-text">
            {number}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
