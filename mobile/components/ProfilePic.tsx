import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingBottom: 10
	},
	stretch: {
		width: 100,
		height: 100,
		borderRadius: 100,
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