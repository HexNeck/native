import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CustomerList from "./src/components/CustomerList";
import { fetchCustomers, fetchCustomerConnectivity } from "./src/utilis/api";

interface Customer {
  _id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  contact: string;
  connected?: boolean;
}

export default function App() {
  const [customers, setCustomers] = React.useState<Customer[]>([]);

  React.useEffect(() => {
    const loadData = async () => {
      const customersData = await fetchCustomers();
      const customerIds = customersData.map(customer => customer._id);
      const connectivityData = await fetchCustomerConnectivity(customerIds);

      const mergedData = customersData.map(customer => {
        const status = connectivityData.find(status => status.id === customer._id);
        return { ...customer, connected: status ? status.connected : false };
      });

      setCustomers(mergedData);
    };

    loadData();
  }, []);

  return (
      <SafeAreaView style={styles.safeArea}>
        <CustomerList customers={customers} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
