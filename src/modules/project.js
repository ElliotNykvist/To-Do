class Project {
  constructor(title) {
    this._title = title;
    this._tasks = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value) {
      this._title = value;
    }
  }

  get tasks() {
    return this._tasks;
  }

  addTask(task) {
    if (task) {
      this._tasks.push(task);
    }
  }
}

export default Project;