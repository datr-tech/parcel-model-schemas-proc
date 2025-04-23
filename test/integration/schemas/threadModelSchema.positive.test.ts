import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
} from '@datr.tech/parcel-model-schemas-common-fields';
import { threadModelSchema } from './../../../dist';

describe('threadModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...threadModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
