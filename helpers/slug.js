import slugify from 'slugify';

export function slug(name) {
    return slugify(name, { lower: true }).replace(/[^\w\-]+/g, '');
}
