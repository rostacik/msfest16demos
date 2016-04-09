import assert = require('assert');
import { MathHelper } from "../src/mathHelper";

describe('mathHelper tests', () => {
  describe('#sub()', () => {
    it('should fail if no parameter passed in', () => {
      assert.throws(
        () => {
          (<any>MathHelper).sub();
        },
        Error
      );
    });

    it('should fail if undefined parameter passed in', () => {
      assert.throws(
        () => {
          MathHelper.sub(undefined, undefined);
        },
        Error
      );
    });

    it('should fail if null parameter passed in', () => {
      assert.throws(
        () => {
          MathHelper.sub(null, null);
        },
        Error
      );
    });

    it('should return 0 from 1 + 1', () => {
      let res: number = MathHelper.sub(1, 1);

      assert.equal(res, 0);
    });

    it('should return 0 from 2 - 2', () => {
      let res: number = MathHelper.sub(2, 2);

      assert.equal(res, 0);
    });

    it('should return 0 from 4 - 4', () => {
      let res: number = MathHelper.sub(4, 4);

      assert.equal(res, 0);
    });

    it('should return 0 from 5 - 5', () => {
      let res: number = MathHelper.sub(5, 5);

      assert.equal(res, 0);
    });
  });
});