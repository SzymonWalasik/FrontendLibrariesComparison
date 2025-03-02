import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-delayed-form',
    templateUrl: './delayed-form.component.html',
    styleUrls: ['./delayed-form.component.scss']
})
export class DelayedFormPageComponent implements OnInit {
    loaded = false;
    form!: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient, private message: NzMessageService) { }

    ngOnInit() {
        setTimeout(() => {
            this.loaded = true;
        }, 3000);

        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    handleSubmit() {
        if (this.form.valid) {
            this.http.post('http://localhost:8080/api/users', this.form.value).subscribe({
                next: () => {
                    this.message.success('User added successfully!');
                    this.form.reset();
                },
                error: (error) => {
                    console.error('Error adding user:', error);
                    this.message.error('Failed to add user.');
                }
            });
        }
    }
}
