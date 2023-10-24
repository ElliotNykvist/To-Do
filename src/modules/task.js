export class Task {
  constructor(title, dueDate, radio) {
    this._title = title;
    this._dueDate = dueDate;
    this._radio = radio;


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

  get radio() {
    return this._radio;
  }

  set radio(value) {
    if(value) {
      this._radio = radio;
    }
  }

}