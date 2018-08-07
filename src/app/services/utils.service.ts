import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


@Injectable()
export class UtilsService {

    aboutMeDisplaySource = new Subject<boolean>();
    aboutMeDisplay$ = this.aboutMeDisplaySource.asObservable();

    // trickAboutMeAnimate(){
    //     setTimeout(() => {
    //         this.aboutMeDisplaySource.next(true);
    //     },900);
    // }

    scrollTo(componentName: string){
        let elementRef = document.getElementById(componentName);
        elementRef.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
    }


    setHeightComponent(){
        let windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        let componentElementHeight = windowHeight - 78;
        return componentElementHeight;
    }

    public static timeoutLoop(setFunction: any, delay: number, stop?: boolean) {
        if (!stop){
            setTimeout(()=>{
                setFunction;
                this.timeoutLoop(setFunction, delay);
            },delay);         
        }
    }

}