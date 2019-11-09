import { isNullOrUndefined } from 'util';

export function deepFind<T>(input: T, key: string): any {
    const splitKey = key.split('.');

    return splitKey.reduce((pre, cur) => {
        if (isNullOrUndefined(pre) || isNullOrUndefined(pre[cur])) return undefined;

        return pre[cur];
    }, input)
}
