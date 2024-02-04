import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
 
  const body = await req.json();
  const { llid } = body;
  console.log('body',body);
    try {
      const response = await fetch(`https://python-backend-kappa.vercel.app/api/user_marcel_data/${llid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const marcelData = await response.json();
      console.log('dat', marcelData);

      return NextResponse.json(marcelData, {
        status: 200,
      });
    } catch(error: any) {
      console.log('error', error)
      return NextResponse.json(
        { error: error.message || "Something went wrong" },
        { status: 500, }
      )
    }
 

}