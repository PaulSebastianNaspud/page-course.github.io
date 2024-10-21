import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
   accesKey : string  = "LESvFHf3rU96G8LKpz3KuMMPOvsUDWUFdStAAMqAdtY"
  private secretKey : string  = "hR80VutIprpupM7Oa78DAqL4vJrOvM3c6wF4jRrnCKo"

  constructor(private http : HttpClient) { }

  async getImg(query: string): Promise<any> {
    return firstValueFrom(
      this.http.get<any>(`https://api.unsplash.com/search/photos?query=${query}&client_id=${this.accesKey}`)
    )
  }
}
