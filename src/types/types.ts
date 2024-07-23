export interface Address {
  street: string;
  zipCode: string;
  city: string;
  country: string;
}

export interface Customer {
  _id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  contact: string;
  address: Address;
  connected: boolean;
}

export interface CustomerItemProps {
  customer: Customer;
  colorblindMode: boolean;
}

export interface CustomerListProps {
  customers: Customer[];
  colorblindMode: boolean;
}
