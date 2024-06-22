import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UploadStatus } from '../model/upload-status.model';

const BASE_PATH = environment.BASE_PATH;

@Injectable({
  providedIn: 'root',
})
export class UploadRecipesPreviewService {
  constructor(private http: HttpClient) {}

  upload(code: string, fileToUpload?: File): Observable<UploadStatus> {
    const formData = new FormData();
    formData.append('fileToUpload', fileToUpload as File);

    return this.http.post<UploadStatus>(
      `${BASE_PATH}/recipes/upload/${code}`,
      formData
    );
  }
}
