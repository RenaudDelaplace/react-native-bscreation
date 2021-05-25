import React from 'react'
import { View, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons'

const LogoTitle = () => {
    return (
      <Image
        style={{
          transform: [{ scale: 0.9 }],
        }}
        source={require("app/assets/logo.png")}
      />
    );
  };

const LeftBack = (props) => {
    return (
        <TouchableHighlight
            style={{ padding: 15 }}
            activeOpacity={0.5}
            underlayColor="transparent"
            onPress={() => {
                props.navigation.goBack()
                console.log
            }}
        >
            <Icon
                style={{ color: "#FFF" }}
                size={30}
                name="arrow-left"
                backgroundColor="transparent"
            />
        </TouchableHighlight>
    )
}

const Right = () => {
    const [show, setShow] = useContext(RouteContext).show
    return (
        <View>
            <TouchableHighlight
                style={{ padding: 15 }}
                activeOpacity={0.5}
                underlayColor="transparent"
                onPress={() => {
                    setShow(!show)
                }}
            >
                <Icon
                    style={{ color: "#FFF" }}
                    size={30}
                    name="car"
                    backgroundColor="transparent"
                />
            </TouchableHighlight>
        </View>
    )
}

const primary = (navigation) => {
    return {
        headerStyle: {
            backgroundColor: "#144880",
            height: 100,
        },
        headerTitleAlign: "center",
        headerLeft: () => <LeftSearch navigation={navigation} />,
        headerTitle: (props) => <LogoTitle {...props} />,
        headerRight: () => <Right />,
    };
};

const back = (navigation) => {
    return {
        headerStyle: {
            backgroundColor: "#144880",
            height: 100,
        },
        headerTitleAlign: "center",
        headerLeft: () => <LeftBack navigation={navigation} />,
        headerTitle: (props) => <LogoTitle {...props} />,
    };
};


exports.primary = primary;
exports.back = back;