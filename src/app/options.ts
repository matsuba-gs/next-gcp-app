import type { NextAuthOptions } from "next-auth";
import type {OAuth2Config} from "@auth/core/providers"

export const options: NextAuthOptions = {
    debug: true,
    session: {strategy: "jwt"},
    providers: [
        {
            id: "gcp",
            name: "GCP Provider",
            type: "oauth",
            issuer: process.env.GCP_URL,
            token: process.env.GCP_URL + '/oauth2/token',
            authorization: process.env.GCP_URL + '/oauth2/authorize',
            profile: process.env.GCP_URL + '/oauth2/userinfo',
            clientId: process.env.GCP_ID,
            clientSecret: process.env.GCP_SECRET,
        } satisfies OAuth2Config,
    ],
};