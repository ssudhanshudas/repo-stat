import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService, RepositoryService } from '../_services';
import { PullRequest } from '../_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    pullRequests: PullRequest[] = [];
    displayedColumns: string[] = ['title', 'description'];
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private repositoryService:RepositoryService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllPullRequests();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    private loadAllPullRequests() {
        this.repositoryService.getAll().pipe(first()).subscribe(pullRequests => {
            this.pullRequests = pullRequests;
            console.log(this.pullRequests);
        });
    }
}