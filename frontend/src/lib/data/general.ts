type General = {
    name: string;
    mail: string;
    phone: string;
};

export const general: General = {
    name: "Elad Huttner",
    mail: "mail@eladhuttner.net",
    phone: "+972-55-668-4427",
} as const;
