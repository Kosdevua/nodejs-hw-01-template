import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const updateContacts = (contactList) =>
  fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
