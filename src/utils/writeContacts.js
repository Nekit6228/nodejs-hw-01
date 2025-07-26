import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    const json = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf-8');
};
