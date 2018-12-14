import { db } from './firebase';

export const doCreateUser = (id, firstName, lastName, email) => {
    db.ref(`users/${id}`).set({
        firstName,
        lastName,
        email
    });
}


export const onceGetUsers = () => {
    db.ref('users').once('value');
}


export const doCreateCompany = (companyName,companyDescription) => {
    db.ref(`companies`).push({
        companyName,
        companyDescription
    });
}

export const doCreateService = (serviceDescription,serviceName,spaces,duration,price,availability) => {
    db.ref(`services`).push({
        serviceDescription,serviceName,duration,spaces,price,availability
    });
}

