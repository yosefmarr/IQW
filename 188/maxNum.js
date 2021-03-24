/* for single and non-single digits arrays */

const maxNum = (n, m, k) => 
{
    let mergeArray = [...n, ...m];
    mergeArray = mergeArray
                        .toString()
                        .replace(/,/g, '')
                        .split('');
    let mergeSortedArray = mergeArray.sort((a,b)=>
                                {
                                    a = +a;
                                    b = +b;
                                    if(a<b) return 1;
                                    if(a>b) return -1;
                                    return 0;
                                });
    return mergeSortedArray
                        .toString()
                        .replace(/,/g, '')
                        .substring(0, k);
}
