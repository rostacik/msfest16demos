import assert = require('assert');
import { mathHelper } from "../src/mathHelper";

describe('mathHelper tests', () => {
  describe('#add()', () => {
    it('should fail if no parameter passed in', () => {
      assert.throws(
        () => {
          (<any>mathHelper).add();
        },
        Error
      );
    });

    it('should fail if undefined parameter passed in', () => {
      assert.throws(
        () => {
          mathHelper.add(undefined, undefined);
        },
        Error
      );
    });

    it('should fail if null parameter passed in', () => {
      assert.throws(
        () => {
          mathHelper.add(null, null);
        },
        Error
      );
    });

    it('should return 2 from 1 + 1', () => {
      let res: number = mathHelper.add(1, 1);

      assert.equal(res, 2);
    });

    it('should return 4 from 2 + 2', () => {
      let res: number = mathHelper.add(2, 2);

      assert.equal(res, 4);
    });

    it('should return 8 from 4 + 4', () => {
      let res: number = mathHelper.add(4, 4);

      assert.equal(res, 8);
    });
  });
});