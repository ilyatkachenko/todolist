import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Task} from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: string;
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  myform: FormGroup;

  constructor(private taskService:TaskService) {
    this.taskService.getTasks()
        .subscribe(tasks => {
          this.tasks = tasks;
        });
  }

  addTask(event){
    event.preventDefault();

    let d = new Date();
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    let currDate = curr_month + "/" + curr_date + "/" + curr_year;

    let dl = this.myform.value.deadline;
    let dl_date = dl.getDate();
    let dl_month = dl.getMonth() + 1;
    let dl_year = dl.getFullYear();
    let dlDate = dl_month + "/" + dl_date + "/" + dl_year;

    let newTask = {
      _id: '',
      title: this.myform.value.title,
      description: this.myform.value.description,
      isDone: false,
      createdDate: currDate,
      deadline: dlDate,
      status: this.myform.value.status
    };

    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;

      this.taskService.addTask(newTask)
          .subscribe(task => {
            this.tasks.push(task);
            this.myform.value.title = '';
            this.myform.value.description = '';
            this.myform.value.deadline = '';
            this.myform.value.status = '';
            console.log(this.myform.value.status);
          });
    }, 1000);

  }

  deleteTask(id){
    let tasks = this.tasks;

    this.taskService.deleteTask(id).subscribe(data => {
        for(let i = 0;i < tasks.length;i++){
          if(tasks[i]._id == id){
            tasks.splice(i, 1);
          }
        }
    });
  }

  updateStatus(task){
    let _task = {
      _id:task._id,
      title: task.title,
      isDone: !task.isDone,
      description: task.description,
      createdDate: task.createdDate,
      deadline: task.deadline,
      status: task.status
    };

    this.taskService.updateStatus(_task).subscribe(data => {
      task.isDone = !task.isDone;
    });
  }

  ngOnInit() {
    this.myform = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    },{updateOn: 'submit'});
  }

}