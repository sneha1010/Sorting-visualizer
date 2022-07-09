async function insertionSort() {
    var i, j, key;
    await sleep(delay);

    setColor(0, SELECTED);
    await sleep(delay);

    setColor(0, SORTED);

    for(i = 1; i < size; i++) {
        await sleep(delay);
      
        setColor(i, SELECTED);
        await sleep(delay);

        j = i - 1;
        key = arr[i];

        while(j >= 0 && arr[j] > key) {
           
            setColor(j, COMPARE);
            await sleep(delay);
            while(run==false)
            await sleep(1);
            swap(j, j + 1);
            if(halt){
                setColorRange(0, size - 1, UNSORTED);
                break;
               }
            setColor(j, SELECTED);
            setColor(j + 1, COMPARE);
            await sleep(delay);
            while(run==false)
            await sleep(1);
            setColor(j + 1, SORTED);
            await sleep(delay);

            j--;
        }
        if(halt){
            setColorRange(0, size - 1, UNSORTED);
            break;
           }
           
        setColor(j + 1, SORTED);
    }
    halt=0;
}
