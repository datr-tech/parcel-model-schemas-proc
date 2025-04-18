import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
