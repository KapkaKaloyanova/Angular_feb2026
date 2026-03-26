import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight: string = '';
  @Input() defaultColor: string = 'transparent';

  constructor(
    private el: ElementRef,
    private render: Renderer2) { }

  ngOnInit():void {
    this.setBackgroundColor(this.defaultColor);
  }

  @HostListener('mouseenter') 
  onMouseEnter(): void {
    const color = this.appHighlight || '#e4ea71';
    this.setBackgroundColor(color);
  }

  @HostListener('mouseleave') 
  onMouseLeave(): void {
    this.setBackgroundColor(this.defaultColor);
  }
  private setBackgroundColor(color: string): void {
    this.render.setStyle(
      this.el.nativeElement,
      'background-color',
      color
    );

    this.render.setStyle(
      this.el.nativeElement,
      'transition',
      'background-color 0.5s ease'
    );
  }
}
