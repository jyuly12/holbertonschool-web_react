export const getFullYear = function(){
    const date = new Date();
    return date.getFullYear();
}

export const getFooterCopy = function(isIndex){
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}