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
    query(':enter, :leave', style({ position: 'fixed', height:'100%' })),
    group([ 
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))]),
    ])
  ])
]);