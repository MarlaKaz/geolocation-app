import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }
});

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => {
    return (
        <ScreenContainer>
          <Text>Welcome!</Text>
          <Button title="Go to Places" onPress={() => navigation.navigate('Places')} 
        />
    </ScreenContainer>
    );
};

export const Places = () => (
    <ScreenContainer>
      <Text>Places Screen</Text>
    </ScreenContainer>
);

{/*export const Pois = () => (
    <ScreenContainer>
      <Text>Here goes the POIs list..</Text>
    </ScreenContainer>
);*/}

{/*export const Maps = () => (
    <ScreenContainer>
      <Text>Here goes the map..</Text>
    </ScreenContainer>
);*/}