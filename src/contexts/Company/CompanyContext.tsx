import { createContext } from 'react';

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

export const CompanyContext = createContext<{
  company: Company;
  setCompany: React.Dispatch<React.SetStateAction<Company>>;
}>({
  company: defaultCompany,
  setCompany: () => {}
});
