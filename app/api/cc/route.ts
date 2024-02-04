import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
 
  const body = await req.json();
  const { llid } = body;

    try {
      const response = await fetch(`https://python-backend-kappa.vercel.app/api/user_themes/${llid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const ccData = await response.json();
      console.log('data', ccData);

      return NextResponse.json(ccData.data, {
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