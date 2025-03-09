import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';

interface User {
  id?: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardPageComponent implements OnInit {
  allData: User[] = [];
  data: User[] = [];
  loading = false;
  visible = false;
  newRecord: User = { name: '', email: '' };
  sortOrder: NzTableSortOrder = 'ascend';
  pageSize = 5;
  currentPage = 1;
  total = 0;

  constructor(private http: HttpClient, private message: NzMessageService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.http.get<User[]>('http://localhost:8080/api/users').subscribe({
      next: (response) => {
        this.allData = response.sort((a, b) =>
          this.sortOrder === 'ascend' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        this.total = this.allData.length;
        this.updateDisplayData();
        this.loading = false;
      },
      error: () => {
        this.message.error('Failed to load data.');
        this.loading = false;
      }
    });
  }

  updateDisplayData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.data = this.allData.slice(start, end);
  }

  handleAdd() {
    if (!this.newRecord.name || !this.newRecord.email) {
      this.message.warning('Please fill in all fields.');
      return;
    }

    this.http.post('http://localhost:8080/api/users', this.newRecord).subscribe({
      next: () => {
        this.message.success('User added successfully!');
        this.fetchData();
        this.visible = false;
        this.newRecord = { name: '', email: '' }; // Reset form
      },
      error: () => {
        this.message.error('Error adding user.');
      }
    });
  }

  handlePaginationChange(page: number, size: number) {
    this.currentPage = page;
    this.pageSize = size;
    this.updateDisplayData();
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'ascend' ? 'descend' : 'ascend';
    this.allData = this.allData.sort((a, b) =>
      this.sortOrder === 'ascend' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    this.updateDisplayData();
  }
}