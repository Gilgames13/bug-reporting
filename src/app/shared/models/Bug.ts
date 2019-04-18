import { BugComment } from './BugComment';

export class Bug {
  id: string;
  title: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  comments: BugComment[];
  createdAt: Date;
  updatedAt: Date;

  constructor(title = '', description = '', priority = -1, reporter = '', status = '', comments = []) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.reporter = reporter;
    this.status = status;
    this.comments = comments;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
