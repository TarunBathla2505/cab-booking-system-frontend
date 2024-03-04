import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionData: any = {};
  constructor() { }
  



  set(key: string, value: any): void {
    this.sessionData[key] = value;
  }

  get(key: string): any {
    return this.sessionData[key];
  }

  clear(): void {
    this.sessionData = {};
  }
}
