import { User } from "./user.model";

export class Itinerary {
    constructor(
        public id?: number,
        public description?: string,
        public country?: string,
        public state?: string,
        public city?: string,
        public image?: File,
        public image64?: string | null | ArrayBuffer,
        public imageName?: string,
        public initialDate?: Date,
        public finalDate?: Date,
        public user?: User | null
    ) {}
}
