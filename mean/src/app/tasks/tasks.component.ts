import {Component, OnInit, Inject} from '@angular/core';
import {TaskService} from '../services/task.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
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
    showSpinner: boolean = false;
    myform: FormGroup;
    priorities: number[] = [1,2,3,4,5,6,7,8,9,10];
    checked: boolean = false;

    constructor(private taskService: TaskService, public dialog: MatDialog) {
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
                this.checking();
            });
    }

    addTask(event) {
        event.preventDefault();

        // let d = new Date();
        // let curr_date = d.getDate();
        // let curr_month = d.getMonth() + 1;
        // let curr_year = d.getFullYear();
        // let currDate = curr_month + "/" + curr_date + "/" + curr_year;

        // let dl = this.myform.value.deadline;
        // let dl_date = dl.getDate();
        // let dl_month = dl.getMonth() + 1;
        // let dl_year = dl.getFullYear();
        // let dlDate = dl_month + "/" + dl_date + "/" + dl_year;

        let newTask = {
            _id: '',
            title: this.myform.value.title,
            description: this.myform.value.description,
            isDone: false,
            createdDate: new Date(),
            deadline: this.myform.value.deadline,
            status: this.myform.value.status,
            priority: this.myform.value.priority
        };

        this.showSpinner = true;

        setTimeout(() => {
            this.showSpinner = false;

            this.taskService.addTask(newTask)
                .subscribe(task => {
                    this.tasks.push(task);
                });
        }, 1000);

    }

    deleteTask(task) {
        let tasks = this.tasks;

        this.taskService.deleteTask(task).subscribe(data => {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i]._id == task._id) {
                    tasks.splice(i, 1);
                    this.dialog.open(DialogDataExampleDialog, {
                        data: {
                            task: task.title
                        }
                    });
                }
            }
        });
    }

    deleteAll() {
        let tasks = this.tasks;

        let tasksDone = tasks.filter(function (task) {
            return task.isDone == true;
        });

        for (let i = 0; i < tasksDone.length; i++) {
            this.taskService.deleteTask(tasksDone[i]).subscribe(data => {
                for (let j = 0; j < tasks.length; j++) {
                    if (tasks[j]._id == tasksDone[i]._id) {
                        tasks.splice(j, 1);
                    }
                }
            });
        }

        this.checking();
        
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                tasks: tasksDone
            }
        });
    }

    updateStatus(task) {
        let _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone,
            description: task.description,
            createdDate: task.createdDate,
            deadline: task.deadline,
            status: task.status,
            priority: task.priority
        };

        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
            this.checking();
        });
    }

    checking(){
        let tasks = this.tasks;

        let tasksDone = tasks.filter(task => task.isDone == true);
        tasksDone.length != 0 ? this.checked = true : this.checked = false;
    }

    ngOnInit() {
        this.myform = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            deadline: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
            priority: new FormControl('', Validators.required),
        }, {updateOn: 'submit'});
    }
}

@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    }
}