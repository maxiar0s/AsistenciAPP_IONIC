import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpclient: HttpClient) { }




  getTopHeadLines(){
    return (this.httpclient.get<RespuestaTopHeadLines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd43b6f7074042db8be67063083f855a'));
  }
}
