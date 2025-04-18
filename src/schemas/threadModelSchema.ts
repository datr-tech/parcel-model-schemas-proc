import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
} from '@datr.tech/leith-common-schema-fields';

export const threadModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'threadId',
  },
  hopId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'dolomite/HopModel',
  },
  processId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'ProcessModel',
  },
  ...commonSchemaFieldGroupFooter,
};
