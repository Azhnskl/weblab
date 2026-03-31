
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private storageKey = 'albums';

  constructor(private http: HttpClient) {}

  private saveToStorage(albums: Album[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(albums));
  }

  private loadFromStorage(): Album[] | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  getAlbums(): Observable<Album[]> {
    const stored = this.loadFromStorage();
    if (stored) {
      return of(stored);
    }
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap(data => this.saveToStorage(data))
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap(() => {
        const stored = this.loadFromStorage() || [];
        const index = stored.findIndex(a => a.id === album.id);
        if (index !== -1) {
          stored[index] = { ...album };
          this.saveToStorage(stored);
        }
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        const stored = this.loadFromStorage() || [];
        this.saveToStorage(stored.filter(a => a.id !== id));
      })
    );
  }
}
