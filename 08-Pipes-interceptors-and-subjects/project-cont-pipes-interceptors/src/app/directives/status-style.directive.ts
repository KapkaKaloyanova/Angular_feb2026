import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStatusStyle]'
})
export class StatusStyleDirective implements OnChanges {
  @Input() appStatusStyle: 'planned' | 'active' | 'completed' | '' = '';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent';

  @HostBinding('style.color')
  textcolor: string = 'inherit';

  @HostBinding('style.padding')
  padding: string = '4px 12px';

  @HostBinding('style.borderRadius')
  borderRadius: string = '15px';

  @HostBinding('style.fontSize')
  fontSize: string = '12px';

  @HostBinding('style.fontWeight')
  fontWeight: string = '500';

  @HostBinding('style.textTransform')
  textTransform: string = 'uppercase';

  ngOnChanges(): void {
    this.updateStyles();
  }

  private updateStyles(): void {
    switch (this.appStatusStyle) {
      case 'planned':
        this.backgroundColor = '#155cb8';
        this.textcolor = '#99c2f5';
        break;
      case 'active':
        this.backgroundColor = '#127238';
        this.textcolor = '#84f8ae';
        break;
      case 'completed':
        this.backgroundColor = '#86868f';
        this.textcolor = '#dfdfe9';
        break;
      default:
        this.backgroundColor = 'transparent';
        this.textcolor = 'inherit';
        break;
    }
  }


}
