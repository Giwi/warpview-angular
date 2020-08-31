import {Component, OnInit} from '@angular/core';
import {Param} from '@senx/warpview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url = 'https://sandbox.senx.io/api/v0/exec';
  options: Param = new Param();
  warpscript = `0 10 <% 'j' STORE
    NEWGTS 'series' $j TOSTRING + RENAME 'gts' STORE
    0 100 <%
        'i' STORE
        $gts NOW $i STU * - NaN NaN NaN RAND ADDVALUE DROP
    %> FOR
    $gts
%> FOR`;
  chartDraw: boolean;
  errorText: string;
  statusText: string;
  statusAlertClosed = true;
  errorAlertClosed = true;

  ngOnInit(): void {
    this.options.showErrors = false;
    this.options.showStatus = false;
  }

  onChardDraw(): void {
    this.chartDraw = true;
  }

  onError(event: any): void {
    console.error(event);
    this.errorText = event;
    this.errorAlertClosed = false;
  }

  onStatus(event: any): void {
    console.log(event);
    this.statusText = event.message;
    this.statusAlertClosed = false;
  }

  onResult(event: any): void {
    console.log(event);
  }
}
