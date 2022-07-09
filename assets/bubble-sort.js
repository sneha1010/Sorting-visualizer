async function bubbleSort() {
   
    // sort_btn.disable=true;
    var i, j;
    await sleep(delay);
     halt=false;
    for(i = 0; i < size - 1; i++) {
        for(j = 0; j < size - i - 1; j++) {
            await sleep(delay);

            setColor(j, COMPARE);
            setColor(j + 1, COMPARE);
            await sleep(delay);

            if(arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                await sleep(delay);
            }
            if(halt){
                setColorRange(0, size - 1, UNSORTED);
                break;
            }
          
            while(run==false)
            await sleep(1);
            setColor(j, UNSORTED);
            setColor(j + 1, UNSORTED);
        }
       if(halt){
        setColorRange(0, size - 1, UNSORTED);
        break;
       }
     
        await sleep(delay);

        setColor(j, SORTED);
    }
     if(halt==false){
    setColor(0, SORTED);

     }
     halt=0;
}
