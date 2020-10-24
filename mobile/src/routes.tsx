import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanageMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/OrphanageData';
import SelectMapPosition from './pages/SelectMapPosition';
import Header from './components/Header';

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator 
                screenOptions={{ 
                    headerShown: false, 
                    cardStyle:{ backgroundColor: '#f2f3f5' } 
                }}>
                <Screen 
                    name="OrphanageMap" 
                    component={OrphanageMap} 
                />                
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails} 
                    options={{
                        headerShown: true,
                        header:() => <Header showCancel={false} title="Orfanato" />
                    }}
                />                
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition} 
                    options={{
                        headerShown: true,
                        header:() => <Header title="Selecione o mapa" />
                    }}
                />                
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData} 
                    options={{
                        headerShown: true,
                        header:() => <Header title="Informe os dados" />
                    }}
                />                
            </Navigator>
        </NavigationContainer>
    )
}