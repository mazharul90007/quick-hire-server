export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    plugins: [{
        id: "expo";
        version: string;
        init: (ctx: import("better-auth").AuthContext) => {
            options: {
                trustedOrigins: string[];
            };
        };
        onRequest(request: Request, ctx: import("better-auth").AuthContext): Promise<{
            request: Request;
        } | undefined>;
        hooks: {
            after: {
                matcher(context: import("better-auth").HookEndpointContext): boolean;
                handler: (inputContext: import("better-call").MiddlewareInputContext<import("better-call").MiddlewareOptions>) => Promise<void>;
            }[];
        };
        endpoints: {
            expoAuthorizationProxy: import("better-call").StrictEndpoint<"/expo-authorization-proxy", {
                method: "GET";
                query: import("zod").ZodObject<{
                    authorizationURL: import("zod").ZodString;
                    oauthState: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>;
                metadata: {
                    readonly scope: "server";
                };
            }, {
                status: ("OK" | "CREATED" | "ACCEPTED" | "NO_CONTENT" | "MULTIPLE_CHOICES" | "MOVED_PERMANENTLY" | "FOUND" | "SEE_OTHER" | "NOT_MODIFIED" | "TEMPORARY_REDIRECT" | "BAD_REQUEST" | "UNAUTHORIZED" | "PAYMENT_REQUIRED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_ALLOWED" | "NOT_ACCEPTABLE" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUEST_TIMEOUT" | "CONFLICT" | "GONE" | "LENGTH_REQUIRED" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "URI_TOO_LONG" | "UNSUPPORTED_MEDIA_TYPE" | "RANGE_NOT_SATISFIABLE" | "EXPECTATION_FAILED" | "I'M_A_TEAPOT" | "MISDIRECTED_REQUEST" | "UNPROCESSABLE_ENTITY" | "LOCKED" | "FAILED_DEPENDENCY" | "TOO_EARLY" | "UPGRADE_REQUIRED" | "PRECONDITION_REQUIRED" | "TOO_MANY_REQUESTS" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "BAD_GATEWAY" | "SERVICE_UNAVAILABLE" | "GATEWAY_TIMEOUT" | "HTTP_VERSION_NOT_SUPPORTED" | "VARIANT_ALSO_NEGOTIATES" | "INSUFFICIENT_STORAGE" | "LOOP_DETECTED" | "NOT_EXTENDED" | "NETWORK_AUTHENTICATION_REQUIRED") | import("better-call").Status;
                body: ({
                    message?: string;
                    code?: string;
                    cause?: unknown;
                } & Record<string, any>) | undefined;
                headers: HeadersInit;
                statusCode: number;
                name: string;
                message: string;
                stack?: string;
                cause?: unknown;
            }>;
        };
        options: import("@better-auth/expo").ExpoOptions | undefined;
    }];
    trustedOrigins: string[];
    user: {
        additionalFields: {
            role: {
                type: "string";
                defaultValue: "APPLICANT";
                required: true;
            };
            status: {
                type: "string";
                defaultValue: "ACTIVE";
                required: true;
            };
            needPasswordChange: {
                type: "boolean";
                required: true;
                defaultValue: false;
            };
            isDeleted: {
                type: "boolean";
                required: true;
                defaultValue: false;
            };
            deletedAt: {
                type: "date";
                required: false;
                defaultValue: null;
            };
        };
    };
    emailAndPassword: {
        enabled: true;
        autoSignIn: false;
        requireEmailVerification: true;
        sendResetPassword: ({ user, url, token, }: {
            user: any;
            url: string;
            token: string;
        }) => Promise<void>;
        forgotPassword: {
            enabled: boolean;
        };
    };
    emailVerification: {
        sendOnSignUp: true;
        autoSignInAfterVerification: true;
        sendVerificationEmail: ({ user, url, token }: {
            user: import("better-auth").User;
            url: string;
            token: string;
        }, request: Request | undefined) => Promise<void>;
    };
    socialProviders: {
        google: {
            clientId: string;
            clientSecret: string;
        };
    };
    databaseHooks: {
        user: {
            create: {
                after: (user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                } & Record<string, unknown>) => Promise<void>;
            };
        };
    };
    advanced: {
        defaultCookieAttributes: {
            sameSite: "none";
            secure: true;
        };
    };
}>;
//# sourceMappingURL=auth.d.ts.map