import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CustomerItemProps } from "../types/types";

const CustomerItem: React.FC<CustomerItemProps> = ({ customer, colorblindMode }) => {
    if (!customer) {
        return null; // Or you can return a placeholder component or loading indicator
    }

    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: customer.avatar }} style={styles.avatar} />
            <View style={styles.infoContainer}>
                <Text>{customer.firstName} {customer.lastName}</Text>
                <Text style={styles.details}>Contact: {customer.contact}</Text>
                <Text style={styles.details}>Address: {customer.address.street}, {customer.address.city}, {customer.address.zipCode}, {customer.address.country}</Text>
            </View>
            <View style={styles.markerContainer}>
                {colorblindMode ? (
                    customer.connected ? (
                        <Text>Connected</Text>
                    ) : (
                        <Text>Non Connected</Text>
                    )
                ) : (
                    <View style={[styles.marker, { backgroundColor: customer.connected ? 'green' : 'red' }]} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    details: {
        fontSize: 12,
        color: '#666',
    },
    markerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    marker: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    circleMarker: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    squareMarker: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
    },
});

export default CustomerItem;
