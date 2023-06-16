export const oktaConfig = {
    clientId: '0oa9zgxsxrYP4kO715d7',
    issuer: 'https://dev-04359233.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce : true,
    disableHttpsCheck: true,
}