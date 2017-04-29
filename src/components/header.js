// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
	const { textStyle,viewStyle } = styles;

	return (
		<View style = {viewStyle}>
			<Text style = {textStyle} >Albums!</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		elevation: 5,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// Make the component available to ohter parts of the app
export default Header;
