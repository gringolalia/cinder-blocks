import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-al-tanaqqal',
  templateUrl: './al-tanaqqal.component.html',
  styleUrls: ['./al-tanaqqal.component.scss']
})

export class AlTanaqqalComponent {
    open = false;
    drawerType = 'temporary';
    headerType = 'header';

    toggleDrawer() {
        this.open = !this.open;
    }

    get toolbarSpacer() { return this.headerType === 'spacer'; }
    get toolbarHeader() { return this.headerType === 'header'; }
}
