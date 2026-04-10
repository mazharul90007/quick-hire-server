export interface ICreateApplicant {
    email: string;
    password: string;
    applicant: {
        name?: string;
        address?: string;
        phone?: string;
    };
}
export interface ICreateRecruiter {
    password: string;
    email: string;
    recruiter: {
        recruiterName?: string;
        recruiterPhone?: string;
        recruiterWorkEmail?: string;
        companyName?: string;
        companyWebsite?: string;
        companyFacebookId?: string;
        companyLinkedInId?: string;
        companySize?: string;
        companyAddress?: string;
        industryId?: string;
        subIndustryId?: string;
    };
}
//# sourceMappingURL=auth.interface.d.ts.map