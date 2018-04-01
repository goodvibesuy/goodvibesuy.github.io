import { Directive, ElementRef, HostListener, Input, DoCheck, Renderer2 } from '@angular/core';
import { InputValidation } from './InputValidation';

@Directive({
    selector: '[cenInputValidation]'
})
export class CenouraInputValidation implements DoCheck {
    @Input() cenInputValidation: InputValidation;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngDoCheck(): void {
        if (this.cenInputValidation.dirty) {
            if (this.cenInputValidation.valid) {
                this.renderer.addClass(this.el.nativeElement, 'is-valid');
                this.renderer.removeClass(this.el.nativeElement, 'is-invalid');
            }
            if (this.cenInputValidation.invalid) {
                this.renderer.addClass(this.el.nativeElement, 'is-invalid');
                this.renderer.removeClass(this.el.nativeElement, 'is-valid');
            }
        }
    }
}