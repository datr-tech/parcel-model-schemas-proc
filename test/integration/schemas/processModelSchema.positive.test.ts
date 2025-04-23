import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
} from '@datr.tech/parcel-model-schemas-common-fields';
import { processModelSchema } from './../../../dist';

describe('processModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...processModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
