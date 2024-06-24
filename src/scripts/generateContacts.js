import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contactList = JSON.parse(data);
  const newSongList = Array(number).fill(0).map(createFakeContact);
  contactList.push(...newSongList);
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
  console.log(contactList);
};

generateContacts(5);
