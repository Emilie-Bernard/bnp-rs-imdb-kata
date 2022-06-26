import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  public endYear: string = this.data.endYear ? this.data.endYear.toString() : "";
  public startYear: string = this.data.startYear.toString();
  public years: number[] = [];
  public typeList: string[] = ["Animation","Short", "Documentary", "Romance","Comedy","Sport","News", "Fantasy", "Horror","Historic","Crime","Drama","War","Adventure","Western","Action","Mystery","Biography"];
  public typeSelected?: string[] = this.data.genres?.split(",");

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
  ) {
    const nowDate = new Date().getFullYear();
    for (let year = nowDate; year >= 1800; year--) {
      this.years.push(year);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

  changeIsAdult(bool: boolean): void {
    if (bool === this.data.isAdult)
      this.data.isAdult = !bool;
    else
      this.data.isAdult = bool;
  }
  
  modelChangeMinutes(value:number) {
    this.data.runtimeMinutes = value;
  }

  onChangeEndDate(value:any) {
    this.data.endYear = value.value;
  }
  onChangeStartDate(value:any) {
    this.data.startYear = value.value;
  }
  onChangeType(value:any) {
    this.typeSelected?.push(value.value);
    this.data.genres = this.typeSelected?.toString();
  }
}
