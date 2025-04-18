import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
