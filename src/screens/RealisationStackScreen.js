import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Realisation from '../Views/Realisation/Realisation';
import Description from '../Views/Realisation/Description/Descriptions';


const RealisationStack = createStackNavigator()

const RealisationStackScreen = () => (
    <RealisationStack.Navigator headerMode="none">
        <RealisationStack.Screen name="Realisation" component={Realisation} />
        <RealisationStack.Screen name="Description" component={Description} />
    </RealisationStack.Navigator>
);

export default RealisationStackScreen;
