import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanageMap from './pages/OrphanagesMap';

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="OrphanageMap" component={OrphanageMap} />                
            </Navigator>
        </NavigationContainer>
    )
}