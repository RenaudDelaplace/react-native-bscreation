import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AnimatedNavigation from "./AnimatedNavigation";
import Accueil from "../../Views/Home/Accueil";
import SavoirFaire from "../../Views/Quality/SavoirFaire";
import Contact from "../../Views/Contact/Contact";
import RealisationStackScreen from "../../screens/RealisationStackScreen";
import { navigationRef } from "./components/NavigationRef"

const Navigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator
                tabBar={(props) => <AnimatedNavigation {...props} />}
            >
                <Tab.Screen name="Home" component={Accueil} initialParams={{iconNameInactive: "home-outline", iconNameActive: "home"}} />
                <Tab.Screen name="Savoir" component={SavoirFaire} initialParams={{iconNameInactive: "alert-circle-outline", iconNameActive: "alert-circle"}} />
                <Tab.Screen name="Description" component={RealisationStackScreen} initialParams={{iconNameInactive: "apps-outline", iconNameActive: "apps"}} />
                <Tab.Screen name="Contact" component={Contact} initialParams={{iconNameInactive: "call-outline", iconNameActive: "call"}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation