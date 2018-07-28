import Cookies from 'universal-cookie';

export function setCookie(name, value, path, age){
    const cookies = new Cookies();
    cookies.set(name, value , { path: path, maxAge: age  });   
}

export function getCookie(name){
    const cookies = new Cookies();
    return cookies.get(name);
}

export function removeCookie(name){
    const cookies = new Cookies();
    cookies.remove(name);
}

export function removeCookies(names){
    const cookies = new Cookies();
    names.map(name=>cookies.remove(name));
}