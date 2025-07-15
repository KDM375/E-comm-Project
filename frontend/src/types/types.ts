export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    specs: {
      processor: string;
      ram: string;
      storage: string;
      display: string;
    };
  }
  
  export interface User {
    id: number;
    email: string;
    password: string;
    role: 'admin' | 'customer';
    name: string;
  }