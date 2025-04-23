import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { processModelSchemaOptions } from './../../../dist';

describe('processModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        ...commonSchemaOptions,
        collection: 'process',
      };

      // Act
      const propsFound = { ...processModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
