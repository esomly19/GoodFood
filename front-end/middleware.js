import { NextResponse } from 'next/server';
import {parseCookies} from "nookies";

export async function middleware(request) {
  let validToken = await verifyToken(request.cookies.get("token"));
  const url = request.nextUrl.clone()
  const requestUrl = request.nextUrl.pathname;
  //Eviter les images et les webpack next
  if (!requestUrl.startsWith('/auth')&&!requestUrl.startsWith('/commande')&&!requestUrl.startsWith('/home')&&requestUrl!=='/') return NextResponse.next();

  //Si le token sont valides
  if(validToken && (!requestUrl.startsWith('/auth') && requestUrl!=='/')){
    return NextResponse.next();
  }
  else if(validToken && (request.nextUrl.pathname.startsWith('/auth') || requestUrl==='/')) {
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }
  //Si les token n'ai pas valide
  if (!validToken && request.nextUrl.pathname.startsWith('/auth')) return NextResponse.next();
  else if (!validToken) {
    url.pathname = '/auth'
    return NextResponse.redirect(url)
  }


  return NextResponse.next();
}

const verifyToken = async (token)=>{
  if(!token) return false;
  let res=true;
  try{
    await fetch(process.env.AUTH_API+"/verify",{
      method:"POST",
      body:JSON.stringify({token:token}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  catch (e) {
     res=false;
  }
  return res;


}
