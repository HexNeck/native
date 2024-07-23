import React from "react";
import { SafeAreaView, StyleSheet, Switch, View, Text } from "react-native";
import CustomerList from "./src/components/CustomerList";
import { fetchCustomers, fetchCustomerConnectivity } from "./src/utilis/api";
import { Customer } from "./src/types/types";
import {startServer} from "./src/server";

startServer();

const App: React.FC = () => {
  const [customers, setCustomers] = React.useState<Customer[]>([]);
  const [colorblindMode, setColorblindMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadData = async () => {
      const customersData = await fetchCustomers();
      const customerIds = customersData.map(customer => customer._id);
      const connectivityData = await fetchCustomerConnectivity(customerIds);
      const mergedData = customersData.map(customer => {
        const status = connectivityData.find(status => status.id === customer._id);
        return { ...customer, connected: status ? status.isConnected : false };
      });
      setCustomers(mergedData);
    };

    loadData();
  }, []);

  return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.toggleContainer}>
          <Text>Colorblind Mode</Text>
          <Switch
              value={colorblindMode}
              onValueChange={(value) => setColorblindMode(value)}
          />
        </View>
        <CustomerList customers={customers} colorblindMode={colorblindMode} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
