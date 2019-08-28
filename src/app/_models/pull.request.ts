export class PullRequest {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    reviewers: string[];
    sourceBranch: string;
    targetBranch: string;
}