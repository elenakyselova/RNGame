import { View, Text, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children, onPress}) {
    return (
        <View style={style.buttonOuterContainer}>
        <Pressable 
                style={({pressed}) => 
                 pressed 
                  ? [style.buttonInnerContainer, style.pressed]
                  : style.buttonInnerContainer
                } 
        
                onPress={onPress} 
                android_ripple={{color: '#640233'}}
        >
            <Text style={style.buttonText}>{children}</Text>
        </Pressable>
        </View>
    );
}

export default PrimaryButton;

const style = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin:4,
        overflow: 'hidden',
    },
   
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});