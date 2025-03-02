import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzModalService } from 'ng-zorro-antd/modal';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardPageComponent implements OnInit {
  data: User[] = [];
  loading = false;
  visible = false;
  newRecord: User = { id: 0, name: '', email: '' };
  sortOrder: NzTableSortOrder = 'ascend';
  pageSize = 5;
  currentPage = 1;

  constructor(private http: HttpClient, private modal: NzModalService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.http.get<User[]>('http://localhost:8080/api/users').subscribe(response => {
      this.data = response.sort((a, b) =>
        this.sortOrder === 'ascend' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      );
      this.loading = false;
    });
  }

  handleAdd() {
    this.http.post('http://localhost:8080/api/users', this.newRecord).subscribe(() => {
      this.fetchData();
      this.visible = false;
    });
  }
}
