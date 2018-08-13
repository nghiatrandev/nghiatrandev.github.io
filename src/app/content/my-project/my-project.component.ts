import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// @import '../../../node_modules/@angular/material/theming';

@Component({
  selector: 'my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css'],
})
export class MyProjectComponent {

  componentHeight : string;

  constructor(
    private dialog: MatDialog,
  ){}


  ngOnInit() {}

  openProjectDialog(){
    // console.log('fsdafdass')
    // let dialogRef = this.dialog.open(MyProjectDialogComponent, {
    //         disableClose: false,
    //         hasBackdrop: true,
    //         backdropClass: '',
    //         width: '90%',
    //         height: '90%',
    // });
    // dialogRef.afterClosed().subscribe(() => {})
  }

}
