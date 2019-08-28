import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PullRequest } from '../_models/pull.request';
import {of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RepositoryService {
    constructor(private http: HttpClient) { }
    getAll() {
        let observable = Observable.create(observer => {
            setTimeout(() => {
              let prs = [{
                id: '0001',
                title: 'Pull Request 01',
                description: 'Pull Request 01',
                createdDate: new Date(2019,8,8),
                reviewers: ['Paul', 'Adam'],
                sourceBranch: 'source branch',
                targetBranch: 'target branch'
            }];
          
              observer.next(prs); // This method same as resolve() method from Angular 1
              
              observer.complete();//to show we are done with our processing
              // observer.error(new Error("error message"));
            }, 2000);
          
          });
        return observable;
        //return this.http.get<PullRequest[]>(`${config.apiUrl}/pullRequests`);
    }
}