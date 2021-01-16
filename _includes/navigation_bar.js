import React from 'react';
import { Text, View } from 'react-native';

import { Link } from 'react-router-native';

export default function NavigationBar() {
  return (
    <View>
      <Text>NavBar</Text>
      <View>
        <Link to={`/`}>
          <Text>homepage</Text>
        </Link>
        <Link to={`/document`}>
          <Text>document page</Text>
        </Link>
        <Link to={`/profile`}>
          <Text>profile page</Text>
        </Link>
        <Link to={`/settings`}>
          <Text>settings page</Text>
        </Link>
      </View>
    </View>
  );
}
