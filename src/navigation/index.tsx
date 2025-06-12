import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigationStack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
