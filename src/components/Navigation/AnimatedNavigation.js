import React, { useState, useEffect} from "react";
import {
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Platform,
} from "react-native";


import Animated, { EasingNode, interpolateNode, Extrapolate } from "react-native-reanimated"

import NavigationIcon from "./components/NavigationIcon";

const style = StyleSheet.create({
    tabContainer: {
        height: 60,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: "absolute",
        bottom: 0,
        justifyContent: 'center',
    },
});

const AnimatedNavigation = ({
    state,
    navigation,
}) => {
    const windowWidth = Dimensions.get("window").width;
    const [animated] = useState(new Animated.Value(0))
    
    return (
        <View style={[style.tabContainer, { width: windowWidth }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const { iconNameActive, iconNameInactive } = route.params
                    const prefix = Platform.OS === "android" ? `md-` : `ios-`
                   
                    if(!isFocused){
                        animated.setValue(0)
                    }else{
                        useEffect(() => {
                            Animated.timing(animated, {
                                toValue: 1,
                                duration: 200,
                                easing: EasingNode.linear
                            }).start()
                        })
                    }

                    const scale = interpolateNode(animated, {
                        inputRange: [0, 1],
                        outputRange: [1, 1.1],
                        extrapolate: Extrapolate.CLAMP
                    })
                    const translateY = interpolateNode(animated, {
                        inputRange: [0, 1],
                        outputRange: [0, -5],
                        extrapolate: Extrapolate.CLAMP
                    })

                    let iconName
                    if (isFocused) {
                        iconName = `${prefix}${iconNameActive}`
                    } else {
                        iconName = `${prefix}${iconNameInactive}`
                    }

                    const onPress = () => {
                        if (!isFocused){
                            navigation.navigate(route.name)
                        }
                    }

                    return (
                        <Animated.View 
                            key={index}
                            style={[{justifyContent: 'center', alignItems: 'center'}, (isFocused) ? { transform: [{scale: scale}, {translateY: translateY}]} : { transform: [{scale: 1}, {translateY: 0}]}]}
                        >
                            <TouchableOpacity
                                style={{borderColor: "#ff7400", backgroundColor: '#fff', width: 60, height: 60, borderRadius: 99 }}
                                activeOpacity={.7}
                                onPress={() => onPress()}
                            >
                                <NavigationIcon {...{ iconName, isFocused }} />
                            </TouchableOpacity>
                        </Animated.View>
                    );
                })}
            </View>
        </View>
    );
};

export default AnimatedNavigation