export interface ICreateApplicant {
  email: string;
  password: string;
  applicant: {
    name?: string;
    address?: string;
    phone?: string;
  };
}
