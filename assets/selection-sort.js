async function selectionSort() {
    var i, j, min_idx;
    halt=false;
    for(i = 0; i < size - 1; i++) {
        await sleep(delay);

        min_idx = i;
        setColor(min_idx, SELECTED);

        for(j = i + 1; j < size; j++) {
            await sleep(delay);
            while(run==false)
            await sleep(1);
            if(halt){
                setColorRange(0, size - 1, UNSORTED);
                break;
               }
            setColor(j, COMPARE);

            await sleep(delay);
            while(run==false)
            await sleep(1);
           
            if(arr[j] < arr[min_idx]) {
                setColor(min_idx, UNSORTED);
                min_idx = j;
                setColor(min_idx, SELECTED);
                await sleep(delay);
            }
            else
                setColor(j, UNSORTED);
        }
        if(halt){
            setColorRange(0, size - 1, UNSORTED);
            break;
           }
        await sleep(delay);

        if(min_idx != i) {
            setColor(i, COMPARE);
            await sleep(delay);

            setColor(min_idx, COMPARE);
            setColor(i, SELECTED);
            swap(min_idx, i);
            await sleep(delay);
        }
        while(run==false)
        await sleep(1);
       
        setColor(min_idx, UNSORTED);
        setColor(i, SORTED);
    }
    if(halt==false){
        setColor(size - 1, SORTED);
    }
   
    halt=0;
}
