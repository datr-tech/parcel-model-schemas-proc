import { processModelSchema } from '@app-pmsp2/schemas';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
