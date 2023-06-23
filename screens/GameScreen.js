import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
    return (
        <View style={style.screen}>
            <Text>Opponent's Guess</Text>
        </View>
    );
}

export default GameScreen;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
});