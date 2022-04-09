import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	ScrollView
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { credit } from "../../App/Services/getCredits";

export const DetailMovieScreen = ({ navigation, route }) => {
	const { movie } = route.params
	const [credits, setCredits] = useState('')
	useFocusEffect(
		useCallback(() => {
			credit(movie.id).then((data) => {
				setCredits(data.credits);
			})
		}, []),
	);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Image
					resizeMode="cover"
					source={{
						uri: `http://image.tmdb.org/t/p/w780${movie.poster_path}`,
					}}
					style={styles.backgroundPoster}
				/>
				<View style={styles.rowContainer}>
					<View>
						<Text style={styles.title}>{movie.title}</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<AntDesign
							name='star'
							size={24}
							color={colors.secondary}
							style={{ alignSelf: 'center' }}
						/>
						<Text style={{ color: colors.secondary, fontSize: 16, marginLeft: 8, alignSelf: "center", color: "white" }}>{movie.vote_average}/10</Text>
					</View>
				</View>
				<Text style={styles.language}>{movie.original_language}</Text>
				<Text style={styles.overview}>{movie.overview}</Text>
				<View style={styles.line} />
				<Text style={{ color: "white", fontSize: 16, marginVertical: 12 }}>Cast</Text>
				<View style={{ alignItems: 'center', marginBottom: 20, paddingBottom: 60, flexDirection: "row" }}>
					<FlatList
						horizontal
						data={credits.cast}
						renderItem={({ item }) => {
							return (
								<View style={styles.content}>
									<TouchableOpacity>
										<Image
											source={{
												uri: `http://image.tmdb.org/t/p/w780${item.profile_path}`,
											}}
											style={styles.card}
										/>
									</TouchableOpacity>
									<Text style={styles.castName}>{item.name}</Text>
								</View>)
						}
						}
						keyExtractor={(item, index) => item.id}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};


const colors = {
	primary: "#160622",
	secondary: "#FEBD00",
	grey: '#808080'
}
const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
		marginVertical: 16,
		flex: 1,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: "space-between"
	},
	backgroundPoster: {
		height: 300,
		width: 200,
		marginBottom: 24,
		alignSelf: "center"
	},
	title: {
		fontSize: 20,
		color: colors.secondary,
	},
	overview: {
		color: "white",
		textAlign: "justify",
		fontSize: 14,
		marginRight: 12,
		lineHeight: 24,
	},
	language: {
		fontSize: 20,
		color: colors.grey,
		alignSelf: "flex-start",
		textTransform: "uppercase",
		marginBottom: 12
	},
	line: {
		borderBottomColor: "white",
		borderBottomWidth: 0.5,
		alignSelf: "stretch"
	},
	atributTitle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "justify",
		fontSize: 14,
		marginRight: 12,
		lineHeight: 25,
		marginBottom: 12
	},
	atributContent: {
		color: "white",
		textAlign: "justify",
		fontSize: 12,
		marginRight: 12,
		lineHeight: 25,
		marginBottom: 12
	},
	card: {
		width: 120,
		height: 150,
		borderRadius: 12
	},
	content: {
		width: 120,
		height: 150,
		borderRadius: 12,
		backgroundColor: colors.secondary,
		margin: 5,
		alignItems: 'center',
		borderColor: colors.secondary
	},
	castName: {
		position: "absolute",
		bottom: 10,
		backgroundColor: "white",
		paddingHorizontal: 12,
		borderRadius: 12,
		textAlign: "center"
	}
}
);
