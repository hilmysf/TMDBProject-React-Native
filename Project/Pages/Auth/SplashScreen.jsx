import { StyleSheet, View, Image } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector} from "react-redux";
export const SplashScreen = ({ navigation }) => {
	const isSignedIn = useSelector((state) => state.Auth.isSignedIn);
	useFocusEffect(
		useCallback(() => {
			setTimeout(() => {
				console.log(isSignedIn)
				if(!isSignedIn){
					navigation.navigate("LoginScreen")
				}else{
					navigation.navigate("PopularMoviesScreen")
				}
			}, 2500), [isSignedIn]
		}))
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require("../../../assets/tmdb_logo.jpg")} />
		</View>
	);
};

const colors = {
	primary: "#160622",
	secondary: "#FEBD00",
	grey: '#808080'
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary
	},
	logo: {
		height: 200,
		width: 200,
		borderRadius: 24
	}
})