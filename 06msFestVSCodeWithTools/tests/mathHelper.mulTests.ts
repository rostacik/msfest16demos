import assert = require('assert');
import { MathHelper } from "../src/mathHelper";

describe('mathHelper tests', () => {
  describe('#mul()', () => {
    it('should fail if no parameter passed in', () => {
      assert.throws(
        () => {
          (<any>MathHelper).mul();
        },
        Error
      );
    });

    it('should fail if undefined parameter passed in', () => {
      assert.throws(
        () => {
          MathHelper.mul(undefined, undefined);
        },
        Error
      );
    });

    it('should fail if null parameter passed in', () => {
      assert.throws(
        () => {
          MathHelper.mul(null, null);
        },
        Error
      );
    });

    it('should return 2 from 1 * 1', () => {
      let res: number = MathHelper.mul(1, 1);

      assert.equal(res, 1);
    });

    it('should return 4 from 2 * 2', () => {
      let res: number = MathHelper.mul(2, 2);

      assert.equal(res, 4);
    });

    it('should return 16 from 4 * 4', () => {
      let res: number = MathHelper.mul(4, 4);

      assert.equal(res, 16);
    });
  });
});