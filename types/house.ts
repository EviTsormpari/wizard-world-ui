interface Head {
    id: string;
    firstName: string;
    LastName: string;
}

interface Trait {
    id: string;
    name: string;
}

//Export to use it in other files
export interface House {
    id: string;
    name: string;
    houseColours: string;
    founder: string;
    animal: string;
    element: string;
    ghost: string;
    commonRoom: string;
    heads: Head[];
    traits: Trait[];
}

