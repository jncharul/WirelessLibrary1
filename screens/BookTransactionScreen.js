import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TransactionScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Issue or Return
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
})
