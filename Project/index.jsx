import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "./App";
import { RootStack } from "./Navigator";

const Project = () => {
	return (
		<Provider store={store}>
			<NavigationContainer >
				<RootStack />
			</NavigationContainer>
		</Provider>
	);
};

export default Project;
