import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  loading = true;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
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

  saveAlbum() {
    if (!this.album) return;
    this.albumService.updateAlbum(this.album).subscribe(() => {
      this.saved = true;
      this.cdr.detectChanges();
    });
  }

  goToPhotos() {
    this.router.navigate(['/albums', this.album?.id, 'photos']);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}