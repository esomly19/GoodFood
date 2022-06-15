import { NextResponse } from 'next/server';

export function middleware(request) {
  let { href } = request.nextUrl;
  let validToken=request.cookies.token;
  if(!validToken || href==='/')return NextResponse.redirect("/auth")
  if(validToken && href==='/auth')return NextResponse.redirect("/home")
  return NextResponse.next();
}