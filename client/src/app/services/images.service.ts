// input.service
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { Headers, Http, RequestOptions } from '@angular/common/http';

@Injectable()
export class ImagesService {
	imagesUrl: string = '/api/images';

	constructor(private http: HttpClient) {}

	getSmallImage(imagePath: string): string {
		return imagePath;
		// var dotIndex = imagePath.indexOf('.');
		// return imagePath.substr(0, dotIndex) + '_small' + imagePath.substr(dotIndex);
	}

	/*.pipe(
                tap(d => this.log(`fetched SupplyUnit`)),
                map(r => (<any>r).data )
            )
            
             this.inputService.getUnits()
      .subscribe(data => {
        this.units = <SupplyUnit[]>data;
      });*/

	sendImage(category: string, fileName: string, fileSize: number, fileData: string) {
		return this.http.post(this.imagesUrl, {
			cat: category,
			name: fileName,
			size: fileSize,
			data: fileData
		});
	}

	// private _handleReaderLoaded(readerEvt) {
	// 	var binaryString = readerEvt.target.result;
	// 	var filestring = btoa(binaryString); // Converting binary string data.

	//     // var headers = new HttpHeaders();
	//     // headers.set('Content-Type',  'application/json');

	//     // var body = {
	//     //     name:
	//     // }
	//     this.http.post(this.imagesUrl, filestring);

	//     // , {
	//     //      headers: headers
	//     // })
	//     debugger;
	// }

	// sendValues(name, password) {
	//     debugger;
	// let headers = new Headers({ : 'application/json' });
	// let options = new RequestOptions({ headers: headers });
	// this.http.post('server-url', JSON.stringify({ Username: name, Password: password, FileData: this.filestring }), options).               // http post method to sending data
	//     subscribe(
	//     (data) => {
	//         console.log('Response received');
	//     },
	//     (err) => { console.log(err); },
	//     () => console.log('Authentication Complete')
	//     );
	// }
}
