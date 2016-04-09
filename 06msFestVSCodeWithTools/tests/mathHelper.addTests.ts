import assert = require('assert');
import { MathHelper } from "../src/mathHelper";

describe('mathHelper tests', () => {
  describe('#add()', () => {
    it('should fail if no parameter passed in', () => {
      assert.throws(
        () => {
          (<any>MathHelper).add();
        },
        Error
      );
    });

    it('should fail if undefined parameter passed in', () => {
      assert.throws(
        () => {
          MathHelper.add(undefined, undefined);
        },
        Error
      );
    });

    it('should fail if null parameter passed in', () => {
      assert.throws(
        () => {
          MathHelper.add(null, null);
        },
        Error
      );
    });

    it('should return 2 from 1 + 1', () => {
      let res: number = MathHelper.add(1, 1);

      assert.equal(res, 2);
    });

    it('should return 4 from 2 + 2', () => {
      let res: number = MathHelper.add(2, 2);

      assert.equal(res, 4);
    });

    it('should return 8 from 4 + 4', () => {
      let res: number = MathHelper.add(4, 4);

      assert.equal(res, 8);
    });
  });
});