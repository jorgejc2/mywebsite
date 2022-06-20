import { 
Directive,
Renderer2,
OnInit,
ElementRef,
HostListener,
HostBinding,
Input
} from '@angular/core';

@Directive({
  selector: '[appImgDim]'
})
export class ImgDimDirective implements OnInit{
  /*defaults for img brightness but new inputs can be used*/
  @Input() defaultBrightness: string = 'brightness(100%)';
  @Input() hoverBrightness: string = 'brightness(60%)';
  @HostBinding('style.filter') imgBrightness: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.imgBrightness = this.defaultBrightness;
  }

  /* sets the brightness for elements depending if the mouse hovers over the img */
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.imgBrightness = this.hoverBrightness;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.imgBrightness = this.defaultBrightness;
  }

}
