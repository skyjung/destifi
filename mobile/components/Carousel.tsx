import React from 'react'
import {View, ScrollView, StyleSheet, StatusBar} from 'react-native'

export const Carousel = (props: any) => {

	const { locations, style } = props;
	const itemsPerInterval = props.itemsPerInterval === undefined
		? 1
		: props.itemsPerInterval;

	const [intervals, setIntervals] = React.useState(1);
	const [width, setWidth] = React.useState(0);

	const init = (width: number) => {
		// initialise width
		setWidth(width);
		// initialise total intervals
		const totalItems = locations.length;
		setIntervals(Math.ceil(totalItems / itemsPerInterval));
	}

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal={true}
				contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
				showsHorizontalScrollIndicator={false}
				onContentSizeChange={(w, h) => init(w)}
				scrollEventThrottle={200}
				pagingEnabled
				decelerationRate="fast"
			>
				{locations.map((location) => {
						{location.title}
				})}
			</ScrollView>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		paddingTop: StatusBar.currentHeight
	},
	scrollView: {

	}
})

export default Carousel;

