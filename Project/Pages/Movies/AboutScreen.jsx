import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, Button, Card } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context';
import { logout } from '../../App/Auth/authSlice';
import { Linking } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';
export const AboutScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const isSignedIn = useSelector((state) => state.Auth.isSignedIn);
    const onLogout = () => {
        dispatch(logout())
        navigation.navigate("LoginScreen")
    }
    return (
        <>
            <SafeAreaView style={styles.container} >
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <View style={{ alignContent: "center" }}>
                            <Text style={styles.contentText}>
                                {'Hey!\nIm Hilmy Saeful Fatah a\nMobile App Developer based\non Depok, indonesia.'}
                            </Text>
                            <View flexDirection={"row"}>
                                <Text style={styles.contentText}>
                                    Follow Me
                                </Text>
                                <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com/')}>
                                    <AntDesign style={styles.icons} name="instagram" color="white" size={24} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('http://twitter.com/')}>
                                    <AntDesign style={styles.icons} name="twitter" color="white" size={24} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com/')}>
                                    <FontAwesome5 style={styles.icons} name="line" color="white" size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image style={styles.profileImage} source={require("../../../assets/profile.jpg")} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 18, color: "white", marginTop: 24, fontWeight: "bold", marginBottom: 24 }}>Account Info</Text>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='user-secret' size={32} color="white" />
                        <View style={{ justifyContent: "center" }}>
                            <Text style={styles.infoTitle}>Name</Text>
                            <Text style={styles.infoContent}>Hilmy Saeful Fatah</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <AntDesign style={styles.infoIcon} name='phone' size={32} color="white" />
                        <View style={{ justifyContent: "center" }}>
                            <Text style={styles.infoTitle}>Mobile</Text>
                            <Text style={styles.infoContent}>+6281361620402</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Entypo style={styles.infoIcon} name='email' size={32} color="white" />
                        <View style={{ justifyContent: "center" }}>
                            <Text style={styles.infoTitle}>Email</Text>
                            <Text style={styles.infoContent}>hilmy.barca@gmail.com</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Entypo style={styles.infoIcon} name='address' size={32} color="white" />
                        <View style={{ justifyContent: "center" }}>
                            <Text style={styles.infoTitle}>Address</Text>
                            <Text style={styles.infoContent}>Depok City</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome5 style={styles.infoIcon} name='birthday-cake' size={32} color="white" />
                        <View style={{ justifyContent: "center" }}>
                            <Text style={styles.infoTitle}>D.O.B</Text>
                            <Text style={styles.infoContent}>31 March 2000</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        onLogout()
                        console.log(isSignedIn)
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const colors = {
    primary: "#160622",
    secondary: "#FEBD00",
    grey: '#808080'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 32,
    },
    header: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 16,
        alignItems: "stretch",
        paddingVertical: 24,
        borderRadius: 32
    },
    icons: {
        marginStart: 12,
    },
    profileImage: {
        width: 120,
        height: 120,
        alignSelf: "flex-start",
        borderRadius: 90,
        justifyContent: "center"
    },
    contentText: {
        fontSize: 14,
        color: "white",
        marginBottom: 16,
    },
    infoContainer: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginBottom: 24
    },
    infoIcon: {
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 12
    },
    infoTitle: {
        color: "white",
        fontSize: 14
    },
    infoContent: {
        color: colors.grey,
        fontSize: 14
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