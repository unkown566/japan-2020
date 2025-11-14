import { NextRequest, NextResponse } from 'next/server'
import { getLink, updateLink } from '@/lib/linkDatabase'

export async function POST(request: NextRequest) {
  try {
    const { token, emails, neverExpire } = await request.json()

    if (!token) {
      return NextResponse.json({ error: 'Token required' }, { status: 400 })
    }

    // Get the link
    const link = await getLink(token)
    
    if (!link) {
      return NextResponse.json({ error: 'Link not found' }, { status: 404 })
    }

    // Update the link
    const updatedLink = { ...link }

    // Add emails to allowed list
    if (emails && Array.isArray(emails)) {
      const normalizedEmails = emails.map(e => e.toLowerCase().trim()).filter(e => e.includes('@'))
      
      if (link.type === 'generic') {
        // For generic links, merge with existing allowed emails
        const existingEmails = link.allowedEmails || []
        const allEmails = [...new Set([...existingEmails, ...normalizedEmails])]
        updatedLink.allowedEmails = allEmails
        updatedLink.totalEmails = allEmails.length
        updatedLink.pendingEmails = allEmails.filter(e => !(link.validatedAccounts || []).includes(e))
        updatedLink.pendingCount = updatedLink.pendingEmails.length
      }
    }

    // Set to never expire
    if (neverExpire === true) {
      // Set expiration to 100 years from now
      updatedLink.expiresAt = Date.now() + (100 * 365 * 24 * 60 * 60 * 1000)
    }

    // Ensure link is active
    updatedLink.status = 'active'

    // Save the updated link
    await updateLink(token, updatedLink)

    return NextResponse.json({
      success: true,
      message: 'Link updated successfully',
      link: {
        token,
        type: updatedLink.type,
        status: updatedLink.status,
        emailCount: updatedLink.totalEmails,
        expiresAt: updatedLink.expiresAt,
        expiresIn: Math.round((updatedLink.expiresAt - Date.now()) / (1000 * 60 * 60 * 24)) + ' days'
      }
    })
  } catch (error: any) {
    return NextResponse.json({
      error: error.message
    }, { status: 500 })
  }
}

