export default interface ITodo {
    id: number | null;
    name: string;
    body: string;
    isCompleted: boolean;
    [key: string]: any;
}