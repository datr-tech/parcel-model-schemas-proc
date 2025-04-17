import { commonSchemaFieldGroupFooter, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const processModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'processId',
  },
  frameworkId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'entity/FrameworkModel',
  },
  journeyId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'dolomite/JourneyModel',
  },
  ...commonSchemaFieldGroupFooter,
};
