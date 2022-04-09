import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch } from "react-redux";
import { login } from '../../App/Auth/authSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
export const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const onLogin = () => {
        dispatch(login())
        console.log(`isSignedIn: ${login()}`)
        navigation.navigate("PopularMoviesScreen")
    }
    return (
        <>
            <SafeAreaView style={styles.container} >
                <Text style={styles.bigLoginText}>
                    Find your
                </Text>
                <Text style={styles.smallLoginText}>
                    Favorite Movies
                </Text>
                <TextInput style={styles.textInput} placeholder="Email" textContentType='emailAddress' placeholderTextColor={'white'} />
                <TextInput style={styles.textInput} placeholder="Password" textContentType='password' secureTextEntry={true} placeholderTextColor={'white'} />
                <TouchableOpacity onPress={() => onLogin()}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const colors = {
    primary: "#160622",
    secondary: "#FEBD00",
    grey: '#E5E5E5'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 32,
        justifyContent: "center",
        backgroundColor: colors.primary
    },
    bigLoginText: {
        alignSelf: "flex-start",
        color: "white",
        fontSize: 24,
    },
    smallLoginText: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        color: "white",
        fontSize: 42,
        marginBottom: 72
    },
    textInput: {
        paddingVertical: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: 'white',
        alignSelf: "auto",
        color: "white",
        borderBottomColor: "white",
        borderBottomWidth: 1
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: colors.secondary,
        marginTop: 32
    },
    buttonText: {
        color: colors.primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})