import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { threadModelSchemaOptions } from './../../../dist';

describe('threadModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        ...commonSchemaOptions,
        collection: 'thread',
      };

      // Act
      const propsFound = { ...threadModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
