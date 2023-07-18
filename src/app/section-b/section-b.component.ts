import { Component } from '@angular/core';
import { SectionsService } from '../services/sections.service';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.scss']
})
export class SectionBComponent {

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
    this.selection.value = 'sectionB';
    this.sectionsService.setNextAction('sectionB');
  }
}
