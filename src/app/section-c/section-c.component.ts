import { Component } from '@angular/core';
import { SectionsService } from '../services/sections.service';

@Component({
  selector: 'app-section-c',
  templateUrl: './section-c.component.html',
  styleUrls: ['./section-c.component.scss']
})
export class SectionCComponent {

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
    this.selection.value = 'build';
    this.sectionsService.setNextAction('sectionC');
  }
}
