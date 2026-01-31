import crypto from 'crypto';
import { FormData } from '../src/types/google';


// 1. Manually create the JWT for Google
function generateJWT() {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL as string
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY as string).replace(/\\n/g, '\n');
    console.log({clientEmail, privateKey})

    const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
    const now = Math.floor(Date.now() / 1000);
    const payload = Buffer.from(JSON.stringify({
        iss: clientEmail,
        scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive',
        aud: 'https://oauth2.googleapis.com/token',
        exp: now + 3600,
        iat: now
    })).toString('base64url');

    const signature = crypto.createSign('RSA-SHA256')
        .update(`${header}.${payload}`)
        .sign(privateKey, 'base64url');

    return `${header}.${payload}.${signature}`;
}

// 2. Main submission function
export async function submitToSheet(formData: FormData) {
    // Exchange JWT for Access Token
    const authResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: generateJWT()
        })
    });
    const { access_token } = await authResponse.json();

    const sheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME;

    const rowData = [
        formData.email,
        new Date().toISOString(),
        formData.name,
        formData.businessName,
        formData.website || '',
        formData.services,
        formData.message,
        formData.subscribe?'true':'false'
    ];


    // 3b. APPEND: If email doesn't exist
    const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:append?valueInputOption=USER_ENTERED`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values: [rowData] })
        }
    );
    
    return response
}