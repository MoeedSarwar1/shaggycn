import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../screens/home';
import { SCREENS } from './navigationList';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      {/* <Stack.Screen name="Atoms" component={AtomsScreen} />
      <Stack.Screen name="Molecules" component={MoleculesScreen} />
      <Stack.Screen name="Templates" component={TemplatesScreen} />
      <Stack.Screen name="Navigation" component={NavigationScreen} />
      <Stack.Screen name="Typography" component={TypographyScreen} />
      <Stack.Screen name="ThemeSwitcher" component={ThemeSwitcherScreen} />
      <Stack.Screen name="Redux" component={ReduxScreen} />
      <Stack.Screen name="ColorTokens" component={ColorTokensScreen} />
      <Stack.Screen name="SpacingTokens" component={SpacingTokensScreen} /> */}
    </Stack.Navigator>
  );
};
export default Navigation;
