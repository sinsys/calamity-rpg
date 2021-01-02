import {
  trigger,
  animate,
  transition,
  style,
  query,
  group
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [    
    query(':enter, :leave', style({ position: 'fixed', height:'100%', opacity: 1 })),
    group([ 
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(20%)' }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      query(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(-20%)' }))]),
    ])
  ])
]);
