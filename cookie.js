const getCookie =name=>{
    const cookie =document.cookie;
    const allCookie =cookie.split(';')
    const findCookie =allCookie.find(c=>c.includes(name));
    if(findCookie){
        'country us';
        const cokkoiesvalue =findCookie.split('=');
        return cokkoiesvalue;
    }
}