import { Component, Input, Output, EventEmitter } from '@angular/core';
import {GVFile} from '../../../shared/models/gvfile.model'

@Component({
	selector: 'file-picker',
	templateUrl: './file-picker.component.html'
})
export class FilePicker {
    @Input() text: string;
	@Output() selected = new EventEmitter<GVFile>();

	constructor() {
        this.text = "Seleccionar imagen";
    }
        
	onChange(event) {
        var files = <File[]>event.srcElement.files;
        if ( files && files.length > 0){
            var file = files[0];

            var reader = new FileReader();
            reader.onload = (readerEvt: any) => {            
                var binaryString = readerEvt.target.result;
                var filestring = btoa(binaryString); 

                this.selected.emit({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        data: filestring
                    });
            };
            reader.readAsBinaryString(file);
        }        
	}
}
