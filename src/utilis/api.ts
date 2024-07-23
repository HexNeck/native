interface Customer {
    _id: number;
    firstName: string;
    lastName: string;
    avatar: string;
    contact: string;
}

interface ConnectivityStatus {
    id: number;
    connected: boolean;
}

export const fetchCustomers = async (): Promise<Customer[]> => {
    const response = await fetch("/api/customers");
    const data = await response.json();
    return data.customers;
};

export const fetchCustomerConnectivity = async (customerIds: number[]): Promise<ConnectivityStatus[]> => {
    const response = await fetch("/api/customer-connectivity-report", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerIds }),
    });
    const data = await response.json();
    return data.customerConnectivity;
};
