import React, { useState, ReactNode } from 'react';
import { CompanyContext } from './CompanyContext';

export interface Company {
    companyName: string;
    legalName: string;
    openingDate: string;
    status: string;
    mainActivity: string;
    address: {
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      city: string;
      state: string;
      postalCode: string;
    };
    phone: string;
    email: string;
    partners: {
      name: string;
      qualification: string;
      entryDate: string;
    }[];
}
  
const defaultCompany: Company = {
    companyName: "",
    legalName: "",
    openingDate: "",
    status: "",
    mainActivity: "",
    address: {
        street:"",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
        postalCode: "",
    },
    phone: "",
    email: "",
    partners: []
};

export const CompanyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [company, setCompany] = useState<Company>(defaultCompany);

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
