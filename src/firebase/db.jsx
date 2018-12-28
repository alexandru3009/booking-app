import { db } from './firebase';

export const doCreateUser = (id, firstName, lastName, email) => {
    db.ref(`users/${id}`).set({
        firstName,
        lastName,
        email
    });
}

export const createCompany = (companyName,companyDescription) => {
const companiesRef = db.ref(`/companies`);
    const company = {
      companyDescription,
      companyName
    }
    companiesRef.push(company);
}

export const createService = (serviceName,serviceDescription,availability,spaces,duration,price) => {
    const serviceRef = db.ref(`/services`);
        const service = {
            serviceName,
            serviceDescription,
            availability,
            spaces,
            duration,
            price
        }
        serviceRef.push(service);
    }


