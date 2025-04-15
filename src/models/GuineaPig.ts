export interface GuineaPig {
    id: number;
    name: string;
    breed: string;
    dob: Date | string | null;
    approxDob: Date | string;
    createdAt: Date;
    updatedAt: Date;
}