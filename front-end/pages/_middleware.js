import { NextResponse } from 'next/server';
import { instance } from '../utils/axiosInstance';

export async function middleware(request) {
  let { href } = request.nextUrl;
  let { name } = request.page;

  let validToken = await verifyToken(request.cookies.token);
  if (!name) return NextResponse.next();
  if (!validToken && href === '/auth') return NextResponse.next();
  if (!validToken) return NextResponse.redirect("/auth")
  if (validToken && (href === '/auth' || href === '/')) return NextResponse.redirect("/home")
  return NextResponse.next();
}

const verifyToken = async (token)=>{
  if(!token) return false;
  let res=true;
  try{
    await fetch("http://localhost:3002/verify",{
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