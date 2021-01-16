import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

// Import Components
import NavigationBar from './_includes/navigation_bar';

// Import Screens
import DashboardScreen from './_screens/dashboard_screen';
import DocumentScreen from './_screens/document_screen';
import ProfileScreen from './_screens/profile_screen';
import Settings from './_screens/settings_screen';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path={`/`} component={DashboardScreen} />
      <Route exact path={`/document`} component={DocumentScreen} />
      <Route exact path={`/profile`} component={ProfileScreen} />
      <Route exact path={`/settings`} component={Settings} />

      <NavigationBar />
    </NativeRouter>
  );
}
