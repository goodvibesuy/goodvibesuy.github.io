export interface InputValidation {
    valid: boolean;
    invalid: boolean;
    dirty: boolean;
    errors: Map<string, boolean>;
}