import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CustomerItemProps } from "../types/types";

const CustomerItem: React.FC<CustomerItemProps> = ({ customer }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: customer.avatar }} style={styles.avatar} />
            <View style={styles.infoContainer}>
                <Text>{customer.firstName} {customer.lastName}</Text>
                <Text style={styles.details}>Address: {customer.contact}</Text>
            </View>
            <View style={[styles.marker, { backgroundColor: customer.connected ? 'green' : 'red' }]} />
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
    marker: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
});

export default CustomerItem;
