import { sum } from "../ts/Example";

describe('Just an example to test jest installation', () => {
    test('should be two', () => {
        expect(sum(1, 1)).toBe(2);
    });
});