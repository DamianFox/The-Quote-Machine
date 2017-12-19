// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeAnimation', [
        transition('* => fadeIn', [
            style({ opacity: 0 }),
            animate(1000, style({ opacity: 1 }))
        ]),
    ]);