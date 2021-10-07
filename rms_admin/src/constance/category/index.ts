export const CategoryBox: Array<FieldMapPropsType> = [
    { id : 'web', span : '웹' },
    { id : 'app', span : '앱' },
    { id : 'embedded', span : '임베디드' },
    { id : 'game', span : '게임' },
    { id : 'ai', span : '인공지능 / 빅데이터' },
    { id : 'security', span : '보안' }
]

export type DataIdType = 'web' | 'app' | 'game' | 'embedded' | 'ai' | 'security';

export type FieldMapPropsType = {
    id: DataIdType;
    span: string;
};

export type CheckStateType = {
    web: boolean;
    app: boolean;
    game: boolean;
    embedded: boolean;
    security: boolean;
    ai: boolean;
};