import type { PageServerLoad } from './$types';
import { projects } from './data';

export const load = (async () => {
    return {posts: projects.map((projects) => ({
        slug: projects.slug,
        title: projects.title
    }))};
}) satisfies PageServerLoad;