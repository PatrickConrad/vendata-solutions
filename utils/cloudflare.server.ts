export const varifyCloudflare = async (cfToken: string) => {
    try{
        const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

        const result = await fetch(verifyUrl, {
            method: 'POST',
            body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${cfToken}`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        });

        const outcome = await result.json();
        return outcome.success as boolean;
    }
    catch(err: any){
        console.log({err})
        return false;
    }
}
