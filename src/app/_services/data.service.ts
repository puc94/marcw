import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(private _http: HttpClient) { }

  getAllTasks() {
    return this._http.get('/api/all_tasks')
      .pipe(map(res => res))
  }

  getTasks() {
    return this._http.get('/api/tasks')
      .pipe(map(res => res))
  }

  getTask(id) {
    return this._http.get('/api/task/' + id)
      .pipe(map(res => res)) 
  }

  createTask(data) {
    return this._http.post('/api/task', data)
      .pipe(map(res => res))
  }

  updateTask(id, data) {
    return this._http.put('/api/task/'+id, data)
      .pipe(map(res => res))
  }

  deleteTask(id) {
    return this._http.delete('/api/task/' + id)
      .pipe(map(res => res))
  }

}
