/*Напишите функцию areArraysSame, которая принимает два
массива с числами в качестве аргументов. Она должна возвращать true, если эти массивы одинаковые (то есть содержат одни
и те же числа в одном и том же порядке), или false, если массивы различаются.  */


function areArraySame (arr1=[], arr2=[]) {
  if(arr1.length !== arr2.length) return false;
    else {
      for( let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;

}
        return true;
}
}
