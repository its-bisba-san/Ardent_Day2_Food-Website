import { Injectable } from '@angular/core';
import { homepage } from './homepage';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  getHomepageItems():Observable<any> {
    throw new Error('Method not implemented.');
  }
  private expenseRestUrl='http://localhost:8000/api/homepage';
  private httpOptions={
    headers: new HttpHeaders({'Content-type':'application/Json'})
  };

  constructor(private httpClient: HttpClient) { }
  getHomepages():Observable<any>{
    return this.httpClient.get(this.expenseRestUrl,this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    );
  }
  getHomepage(id:number):Observable<any>{
    return this.httpClient.get(this.expenseRestUrl+"/"+id,this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    );
  }
  addHomepage(homepage:homepage):Observable<homepage> {
    return this.httpClient.post<homepage>(this.expenseRestUrl, homepage, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    );
  }
  updateHomepage(homepage:homepage):Observable<homepage> {
    return this.httpClient.post<homepage>(this.expenseRestUrl+"/"+homepage.id,homepage,this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    );
  }
  deleteHomepage(homepage:homepage|number):Observable<homepage> {
    const id=typeof homepage=='number'?homepage:homepage.id
    const url='${this.expenseRestUrl}/${id}';
    return this.httpClient.delete<homepage>(url,this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    );
  }
  private httpErrorHandler (error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("error message is " + error.message);
    }else{
      console.error("http status code " + error.status + "error returned is " + error.message);
    }
    return throwError("Error occured. please try again");
  }
}
