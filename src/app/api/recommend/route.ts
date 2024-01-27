import { recomendSongParameter } from '@/common/LLM/chatUtils'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const searchparams = req.nextUrl.searchParams
  const input = searchparams.get('input')
  if (input === null) {
    return NextResponse.json({ error: 'input is null' }, { status: 400 })
  }
  const res = NextResponse.json(await recomendSongParameter(input))
  return res
}
