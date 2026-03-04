export class Validator {
    static isNumber(value: string): boolean {
        return !isNaN(Number(value)) && value.trim() !== '';
    }

    static isNotEmpty(value: string): boolean {
        return value.trim() !== '';
    }
}
