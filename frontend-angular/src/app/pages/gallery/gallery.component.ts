import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpClient } from '@angular/common/http';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    fileList: NzUploadFile[] = [];
    imageList: { id: number, filename: string, content: string }[] = [];
    previewImage: string | undefined = '';
    previewVisible: boolean = false;
    readonly API_URL = 'http://localhost:8080/api/gallery';

    constructor(
        private http: HttpClient,
        private message: NzMessageService,
        private modal: NzModalService
    ) { }

    ngOnInit(): void {
    }

    handleUpload() {
        const formData = new FormData();
        this.fileList.forEach(file => {
            if (file.originFileObj) {
                formData.append('file', file.originFileObj);
            }
        });

        this.http.post(`${this.API_URL}/upload`, formData, { responseType: 'text' }).subscribe(
            () => {
                this.message.success('Images uploaded successfully');
                this.fileList = [];
            },
            error => {
                console.error('Upload failed:', error);
                this.message.error('Failed uploading images.');
            }
        );
    }

    fetchImages() {
        this.http.get<{ id: number; filename: string; content: string }[]>(`${this.API_URL}/all`).subscribe(
            (response) => {
                this.imageList = response;
            },
            error => {
                console.error('Failed fetching images:', error);
                this.message.error('Failed fetching images.');
            }
        );
    }

    handleDeleteImage(id: number) {
        this.http.delete(`${this.API_URL}/delete/${id}`, { responseType: 'text' }).subscribe(
            () => {
                this.message.success('Deleted image.');
                this.fetchImages();
            },
            error => {
                console.error('Delete failed:', error);
                this.message.error('Failed deleting image.');
            }
        );
    }

    handlePreviewFn = (file: NzUploadFile): void => {
        this.previewImage = file.url || (file.originFileObj ? URL.createObjectURL(file.originFileObj) : '');
        this.previewVisible = true;
    }

    handleCancel() {
        this.previewVisible = false;
    }

    onFileListChange({ fileList }: NzUploadChangeParam): void {
        this.fileList = fileList;
    }

    beforeUpload(file: NzUploadFile): boolean {
        const isImage = file.type?.startsWith('image/');
        if (!isImage) {
            this.message.error('You can only upload image files!');
        }
        return isImage ?? false;
    }

}
