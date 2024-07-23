import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomerItem from "./CustomerItem";
import { CustomerListProps } from "../types/types";

const CustomerList: React.FC<CustomerListProps> = ({ customers, colorblindMode }) => {
    return (
        <FlatList
            data={customers}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => <CustomerItem customer={item} colorblindMode={colorblindMode} />}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default CustomerList;
