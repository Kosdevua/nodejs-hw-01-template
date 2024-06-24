import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from './updateContacts.js';

const generateContacts = async (number) => {
  //   const data = await fs.readFile(PATH_DB, 'utf-8');
  const contactList = await getAllContacts();
  const newContactList = Array(number).fill(0).map(createFakeContact);
  contactList.push(...newContactList);
  await updateContacts(contactList);
};

generateContacts(5);
