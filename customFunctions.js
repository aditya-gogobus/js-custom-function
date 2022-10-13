export const camelCaseToString = (text) => {
    const result = text.replace(/([A-Z])/g, ' $1');
    const finalText = result.charAt(0).toUpperCase() + result.slice(1);
    return finalText;
};

export const getUrlParams = (label) => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(label);
    return myParam;
};

export const cleanObj = (obj) => {
    for (const propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName].length === 0) {
            delete obj[propName];
        }
    }
    return obj;
};

export const getTitle = () => {
    var url = window.location.pathname.split('/')[1];
    if (!url) {
        var url = 'home';
    }
    const editable = Boolean(getUrlParams('edit'));
    const dashIdx = url.indexOf('-');
    if (dashIdx != -1 && !editable) {
        url = url.slice(0, dashIdx) + url.charAt(dashIdx + 1).toUpperCase() + url.slice(dashIdx + 2);
    }
    if (!editable) {
        return camelCaseToString(url.split('-').join(' '));
    }
    return `Edit ${camelCaseToString(url.split('-')[1])}`;
};

export const getObjKey = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value);
}
