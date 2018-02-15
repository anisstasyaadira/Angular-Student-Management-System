import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';
import {StudentHostPage} from './dashboard/student-host.page';
import {StudentDetailPage} from './dashboard/student-detail.page';
import {StudentDialog} from './dashboard/student.dialog';
import {StudentService} from '../services/student.service';
import {StudentStudyLevelPipe} from './dashboard/student-study-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    MainLayout,
    StudentHostPage,
    StudentDetailPage,
    StudentDialog,
    StudentStudyLevelPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [AssetService, StudentService],
  entryComponents: [AssetCreatorDialog, StudentDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
