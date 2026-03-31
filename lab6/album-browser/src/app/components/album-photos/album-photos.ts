import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.params['id']);
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('Ошибка:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
