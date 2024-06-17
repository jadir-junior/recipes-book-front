import { TestBed } from '@angular/core/testing';

import { UploadRecipesPreviewService } from './upload-recipes-preview.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UploadRecipesPreviewService', () => {
  let service: UploadRecipesPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UploadRecipesPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
