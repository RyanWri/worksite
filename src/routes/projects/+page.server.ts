import type { PageServerLoad } from './$types';
import { projects } from '$lib/data/data';

export const load = (async () => {
    return {posts: projects.map((project) => ({
        slug: project.slug,
        title: project.title,
        imagePath: project.imagePath
    }))};
}) satisfies PageServerLoad;