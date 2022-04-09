import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AboutScreen, PopularMoviesScreen, DetailMovieScreen } from "../Pages/Movies";
import { LoginScreen, SplashScreen } from "../Pages/Auth";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export const RootStack = () => {
	const isSignedIn = useSelector((state) => state.Auth.isSignedIn);

	return (
		<Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ cardStyle: { backgroundColor: '#160622' } }}>
				<Stack.Screen name="PopularMoviesScreen" component={PopularMoviesScreen} options={{ headerShown: false }} />
				<>
					<Stack.Screen
						name="SplashScreen"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
					<Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
					<Stack.Screen name="DetailMovieScreen" component={DetailMovieScreen} options={{ headerShown: false }} />
				</>
		</Stack.Navigator>
	);
};