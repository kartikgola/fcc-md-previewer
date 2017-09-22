import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  input: string = '';
  mdSample: string = `    Type Markdown text here...
    # Heading 1
    ### Heading 3
    ###### Heading 6
  `;

  constructor(){
  }

  ngOnInit(): void {
  }

  glowMdOutput(): void {
    
  }
}
