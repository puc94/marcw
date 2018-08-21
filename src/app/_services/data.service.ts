import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getAllTasks() {
    return this._http.get('/api/all_tasks')
      .map(result => this.result = result.json().data);
  }

  getTasks() {
    return this._http.get('/api/tasks')
      .map(result => this.result = result.json().data);
  }

  getTask(id) {
    return new Promise((resolve, reject) => {
      this._http.get('/api/task/' + id)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res.data)
      }, (err) => {
        reject(err);
      });
    });
  }

  createTask(data) {
    return new Promise((resolve, reject) => {
        this._http.post('/api/task', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateTask(id, data) {
    return new Promise((resolve, reject) => {
        this._http.put('/api/task/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteTask(id) {
  	return new Promise((resolve, reject) => {
	  	this._http.delete('/api/task/' + id)
	  		.subscribe(res => {
	  			resolve(res)
	  		}, (err) => {
	  			reject(err);
	  		})
  	})
  }

}
