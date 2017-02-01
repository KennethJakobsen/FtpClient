export interface ITree {
    name: string;
    content: ITreeList;
}

export interface ITreeList {
    [index:number] : ITree;
}