import { FormGroup, FormBuilder } from '@angular/forms';

export class ValidableForm {
    private form: FormGroup;
    private values: any;

    constructor(private fb: FormBuilder) {
        this.values = {};
    }

    initForm(c: { [key: string]: any }): void {
        this.form = this.fb.group(c);
    }

    isValid(): boolean {
        return this.form.valid;
    }

    isInvalid(): boolean {
        return this.form.invalid;
    }

    showValidationErrors() {
        Object.keys(this.form.controls).forEach(field => {
            // {1}
            const control = this.form.get(field); // {2}
            control.markAsDirty({ onlySelf: true }); // {3}
        });
    }

    getModel<T>(unformatter?: any): T {
        var model = <T>{};

        Object.keys(this.values).forEach((key) => {
            model[key] = this.values[key];
        });
        Object.keys(this.form.controls).forEach((key) => {
            var value = this.form.controls[key].value;
            if (!!unformatter && !!unformatter[key]) {
                value = unformatter[key](value);
            }
            model[key] = value;
        });
        return model;
    }

    setModel<T>(model: T, formatter?: any): void {
        var formValues = {};

        Object.keys(model).forEach((key) => {
            if (this.form.controls.hasOwnProperty(key)) {
                var value = model[key];
                if (!!formatter && !!formatter[key]) {
                    value = formatter[key](value);
                }
                formValues[key] = value;
            } else {
                this.values[key] = model[key];
            }
        });

        this.form.setValue(formValues);
    }

    protected getFormField(f: string): any {
        return this.form.get(f);
    }

    protected isFormFieldInvalid(s: string): boolean {
        return this.form.get(s).invalid;
    }
}
