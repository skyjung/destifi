import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingBottom: 20
	},
	stretch: {
		width: 200,
		height: 200,
		borderRadius: 200,
		borderWidth: 0.5,
		borderColor: "#1F1717"
	},
});

const ProfilePic = ({source}) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.stretch}
				source={source}
			/>
		</View>
	);
}

export default ProfilePic;