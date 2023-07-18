import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.scss']
})
export class SectionAComponent  implements OnInit{

  // private actionsObservable;
  selection: any = {
    value : null
  };
  constructor(public sectionsService: SectionsService) {}

  ngOnInit() {
    this.sectionsService.currentActionSubject.subscribe(action => {
      this.selection.value = action
      console.log('Section A' + action)
    });
  }

  updateSectionValue() {
    this.selection.value = 'sectionA';
    this.sectionsService.setNextAction('sectionA');
  }
}
