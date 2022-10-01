// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Jobs } = initSchema(schema);

export {
  Jobs
};