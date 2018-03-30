import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "app/pages/home/home.module#HomeModule"
  },
  {
    path: "list",
    loadChildren: "app/pages/list/list.module#ListModule"
  },
  {
    path: "listDetail",
    loadChildren: "app/pages/list-detail/list-detail.module#ListDetailModule"
  },
  {
    path: "selfIntroduction",
    loadChildren:
      "app/pages/self-introduction/self-introduction.module#SelfIntroductionModule"
  },
  {
    path: "personal",
    loadChildren: "app/pages/personal/personal.module#PersonalModule"
  },
  {
    path: "resumePreview",
    loadChildren:
      "app/pages/resume-preview/resume-preview.module#ResumePreviewModule"
  },
  {
    path: "jobRecord",
    loadChildren: "app/pages/job-record/job-record.module#JobRecordModule"
  },
  {
    path: "favourite",
    loadChildren: "app/pages/favourite/favourite.module#FavouriteModule"
  },
  {
    path: "recommendedSchedule",
    loadChildren:
      "app/pages/recommended-schedule/recommended-schedule.module#RecommendedScheduleModule"
  },
  {
    path: "onlinePosition",
    loadChildren:
      "app/pages/online-position/online-position.module#OnlinePositionModule"
  },
  {
    path: "about",
    loadChildren:
      "app/pages/about/about.module#AboutModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
