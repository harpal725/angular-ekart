import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setbackground]'
})
export class SetBackground implements OnInit {

    backColor: string = '#36454F'
    textColor: string = 'yellow'

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }
    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = '#36454F'
        // this.element.nativeElement.style.color = 'white'
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor)
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor)

    }
} 