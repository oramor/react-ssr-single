type Primitives = string | number | boolean;

type PlaceholderValue = Primitives | Record<string, Primitives>;

type PlaceholdersNode = Record<string, PlaceholderValue>;

type PlaceholdersObject = {
    static?: PlaceholdersNode;
    props?: PlaceholdersNode;
    react?: ReactRenders;
};

type ReactRenders = {
    [K: string]: string;
};
