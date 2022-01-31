import { fizzBuzz } from "../src/scripts/Example";

describe('Just an example to testing jest installation', () => {
    test('should be buzz', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });

    test('should be fizz', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });

    test('should be two', () => {
        expect(fizzBuzz(2)).toBe(2);
    });

    test('should be two', () => {
        expect(fizzBuzz(2)).toBe(2);
    });
    
    test('should be fizz', () => {
        expect(fizzBuzz(31)).toBe('fizz');
    });

    test('should be buzz', () => {
        expect(fizzBuzz(52)).toBe('buzz');
    });
});