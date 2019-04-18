import { BugComment } from './BugComment';

export class Bug {
  title: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  comments: BugComment[];
  createdAt: Date;
  updatedAt: Date;
  id: string;

  constructor(title = '', description = '', priority = -1, reporter = '', status = '', comments = [], id = null) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.reporter = reporter;
    this.status = status;
    this.comments = comments;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.id = id;
  }
}
