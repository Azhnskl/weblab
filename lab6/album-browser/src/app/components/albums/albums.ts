import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
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

  goToAlbum(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event) {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      this.cdr.detectChanges();
    });
  }
}

