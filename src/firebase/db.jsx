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