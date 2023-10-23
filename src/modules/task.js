export class Task {
  constructor(title, dueDate) {
    this._title = title;
    this._dueDate = dueDate;


  }


  get title() {
    return this._title;
  }

  set title(value) {
    if(value) {
      this._title = value;
    }
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    if (value) {
      this._dueDate.push(value);
    }
  }
}