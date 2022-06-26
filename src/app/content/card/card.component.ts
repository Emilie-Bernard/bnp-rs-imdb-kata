import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  @Input() movie?: Movie;

  ngOnInit(): void {
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: this.movie,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.movie = result;
    });
  }
}
