export interface Customer {
  _id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  contact: string;
  connected: boolean;
}

export interface CustomerItemProps {
  customer: Customer;
}

export interface CustomerListProps {
  customers: Customer[];
}
