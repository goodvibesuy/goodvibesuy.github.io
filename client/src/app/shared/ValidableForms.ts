import { FormGroup, FormBuilder } from '@angular/forms';

export class ValidableForm {
	private form: FormGroup;

	constructor(private fb: FormBuilder, c: { [key: string]: any }) {
		this.form = this.fb.group(c);
	}

	isValid(): boolean {
		return this.form.valid;
	}

	showValidationErrors() {
		Object.keys(this.form.controls).forEach(field => {
			// {1}
			const control = this.form.get(field); // {2}
			control.markAsDirty({ onlySelf: true }); // {3}
		});
	}

	getModel(): any {
		return this.form.value;
    }
    
    protected getFormField(f: string): any{
        return this. form.get(f);
    }

    protected isFormFieldInvalid(s: string): boolean{
        return this.form.get(s).invalid;
    }
}
