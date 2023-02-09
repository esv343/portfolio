import { annotate } from 'https://unpkg.com/rough-notation?module';
/*import { annotate } from 'rough-notation';*/

const a1 = document.querySelector('#span1');
const annotation1 = annotate(a1, { type: 'underline', color:'#FCA311', animationDuration:'2000', padding: 2});
annotation1.show();

const a2 = document.querySelector('#span2');
const annotation2 = annotate(a2, { type: 'underline', color:'#FCA311', animationDuration:'2000', padding: 1});
annotation2.show();

const a3 = document.querySelector('#span3');
const annotation3 = annotate(a3, { type: 'underline', color:'#FCA311', animationDuration:'2000', padding: 1});
annotation3.show();

const a4 = document.querySelector('#span4');
const annotation4 = annotate(a4, { type: 'underline', color:'#FCA311', animationDuration:'2000', padding: 1});
annotation4.show();

const a5 = document.querySelector('#span5');
const annotation5 = annotate(a5, { type: 'underline', color:'#FCA311', animationDuration:'2000', padding: 1});
annotation5.show();

const a6 = document.querySelector('#span6');
const annotation6 = annotate(a6, { type: 'underline', color:'#FCA311', animationDuration:'2000', padding: 1});
annotation6.show();


