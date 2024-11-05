const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('wishlist');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}


const addToWishlist = (id) => {
    const storedList = getStoredWishlist();
    if(storedList.includes(id)){
        console.log(id, 'Already Exists In The Wishlist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wishlist', storedListStr);
    }
}

export { addToWishlist }